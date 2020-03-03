import { Component, Prop, h, Element, State } from '@stencil/core';

@Component({
  tag: 'mastodon-share-button',
  styleUrl: 'mastodon-share-button.css',
  shadow: true
})

export class MastodonShareButton {
  //Customizable text translations
  @Prop() share_button: string = "Share to Mastodon";
  @Prop() close_button: string = "Close";
  @Prop() send_button: string = "Send";
  @Prop() modal_title: string = "Share to mastodon";
  @Prop() other_instance_text: string = "Other instance";


  @Prop() open: boolean = false;
  @Prop() transparent = false;
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
      <div>
        <button onClick={() => this.openModal()}>{this.share_button}</button>
        <div class={'overlay ' + (this.open ? 'is-visible' : '') + ' ' + (this.transparent ? 'is-transparent' : '')} id="modal">
          <div class="modal-window">

            <div class="modal-window__content"><slot>
              <button class="close-modal" onClick={() => this.closeModal()}>{this.close_button}</button>
              <h2>{this.modal_title}</h2>
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <select onInput={(event) => this.handleSelect(event)}>
                  {this.parseJSON(this.instances).map(instance => (
                    <option value={instance}>{instance}</option>
                  ))}
                  <option value="other_instance">{this.other_instance_text}</option>
                </select>
                <br />
                {
                  this.selected_instance === 'other_instance' ? <input type="url" placeholder="https://" value={this.value} onInput={(event) => this.handleChange(event)} /> : null
                }
                <input type="submit" value={this.send_button} />
              </form>

            </slot></div>

          </div>
        </div>
      </div>
    );
  }
}
