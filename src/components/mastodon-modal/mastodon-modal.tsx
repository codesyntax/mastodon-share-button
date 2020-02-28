import { Component, Prop, h, Watch, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'mastodon-modal',
  styleUrl: 'mastodon-modal.css',
  shadow: true
})
export class MastodonModal {

  @Prop() open = false;
  @Prop() transparent = false;
  @Prop() activated: boolean;
  @Watch('activated')
  watchHandler(newValue: boolean, oldValue: boolean) {
    console.log('The new value of activated is: ', newValue);
    console.log('The OLD value of activated is: ', oldValue);
    this.open = newValue;
  }
  @Prop() share_text: string;
  @Prop() instances;
  @State() selected_instance = this.parseJSON(this.instances)[0];

  @Event({
    eventName: 'closeModalEventCompleted',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) closeModalEventCompleted: EventEmitter;

  @State() value: string;

  closeModal() {
    this.open = false;
    this.closeModalEventCompleted.emit();
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.value);
    console.log(this.selected_instance + '/share?text=' + this.share_text)
    if (this.selected_instance == 'other_instance') {
      if (this.value) {
        window.open(this.value + '/share?text=' + this.share_text)
      }
    } else {
      window.open(this.selected_instance + '/share?text=' + this.share_text)
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
    console.log("DONRAMON: ", string_value)
    return JSON.parse(string_value);
  }
  render() {
    console.log("dsfsd",this.selected_instance)
    return (
      <div class={'overlay ' + (this.open ? 'is-visible' : '') + ' ' + (this.transparent ? 'is-transparent' : '')}>
        <div class="modal-window">

          <div class="modal-window__content"><slot>
            <button class="close-modal" onClick={() => this.closeModal()}>Close button</button>
            <h2>Mastodon share</h2>

            <form onSubmit={(e) => this.handleSubmit(e)}>
              <select onInput={(event) => this.handleSelect(event)}>
                {this.parseJSON(this.instances).map(instance => (
                  <option value={instance}>{instance}</option>
                ))}
                <option value="other_instance">Other instance</option>
              </select>
              <br />
              {
                this.selected_instance === 'other_instance' ?
                  // <label>

                    <input type="url" placeholder="https://" value={this.value} onInput={(event) => this.handleChange(event)} />
                  // </label>
                  : null
              }
              <input type="submit" value="Submit" />
            </form>

          </slot></div>

        </div>
      </div>
    );
  }
}
