import { Component, Prop, h, Element, State, getAssetPath } from '@stencil/core';

@Component({
  tag: 'mastodon-share-button',
  styleUrl: 'mastodon-share-button.css',
  shadow: true,
  assetsDirs: ['assets']
})

export class MastodonShareButton {
  //Customizable text translations
  @Prop() share_button_text: string = "Share to Mastodon";
  @Prop() close_button_text: string = "Close";
  @Prop() send_button_text: string = "Send";
  @Prop() modal_title: string = "Share to mastodon";
  @Prop() other_instance_text: string = "Other instance";

  //Customizable styles
  @Prop() icon_url: string = getAssetPath(`./assets/mastodon-logo.png`);

  @Prop() open: boolean = false;
  @Prop() dark_mode:boolean = true;
  @Prop() share_message: string;
  @Prop() instances: string = '["https://mastodon.social"]';
  @State() selected_instance = this.instances.length != 0 ? this.parseJSON(this.instances)[0] : ["https://mastodon.social"];
  @State() value: string;
  @Element() private element: HTMLElement;


  componentDidLoad() {
    this.instances = this.instances.length == 0 ? '["https://mastodon.social"]' : this.instances;
    const modal = this.element.shadowRoot.getElementById("modal")
    modal.addEventListener("click", event => {
      //Konparatuko dugu ea kanpoko modaleko div-a eta klikatutakoa berdina den, ixteko
      if (event.target == modal) {
        this.closeModal();
      }
    })
  }

  closeModal() {
    this.open = false;
  }
  openModal() {
    this.open = true;
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.value);
    console.log(this.selected_instance + '/share?text=' + this.share_message)
    if (this.selected_instance == 'other_instance') {
      if (this.value) {
        window.open(this.value + '/share?text=' + this.share_message)
      }
    } else {
      window.open(this.selected_instance + '/share?text=' + this.share_message)
    }
  }
  handleChange(event) {
    this.value = event.target.value;
  }

  handleSelect(event) {
    this.selected_instance = event.target.value
    console.log(this.selected_instance)
  }

  parseJSON(string_value) {
    return JSON.parse(string_value);
  }

  render() {
    return (
      <div class={(this.dark_mode ? 'is-dark-mode' : '')}>

        <button onClick={() => this.openModal()} class="share-button">
          {this.share_button_text}
          <img src={this.icon_url} class={this.share_button_text.length!=0?"icon-with-text":""}/>
        </button>

        <div class={'overlay ' + (this.open ? 'is-visible' : '') + ' ' + (this.dark_mode ? 'is-dark-mode' : '')} id="modal">
          <div class="modal-window">
            <div class="modal-window__content">
              <slot>
                <button class="close-modal" onClick={() => this.closeModal()}>{this.close_button_text}</button>
                <br/>
                <h2 class="modal-title">{this.modal_title}</h2>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                  <select onInput={(event) => this.handleSelect(event)} class="form-style">
                    {this.parseJSON(this.instances).map(instance => (
                      <option value={instance}>{instance}</option>
                    ))}
                    <option value="other_instance">{this.other_instance_text}</option>
                  </select>
                  <br />
                  {
                    this.selected_instance === 'other_instance' ? <input type="url" placeholder="https://" value={this.value} onInput={(event) => this.handleChange(event)}  class="form-style input-width"/> : null
                  }
                  <br/>
                  <input type="submit" value={this.send_button_text} class="send-button" />
                </form>
              </slot>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
