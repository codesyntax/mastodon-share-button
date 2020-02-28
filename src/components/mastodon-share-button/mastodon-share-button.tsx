import { Component, Prop, h, Listen } from '@stencil/core';

@Component({
  tag: 'mastodon-share-button',
  styleUrl: 'mastodon-share-button.css',
  shadow: true
})
export class MastodonShareButton {
  @Prop() modal_active = false;
  @Prop() button_text: string = 'Share mastodon';
  @Prop() close_text: string = 'Close';
  @Prop() instances;
  @Prop() share_text:string;
  
  @Listen('closeModalEventCompleted')
  closeModalEventCompletedHandler() {
    console.log('Received the custom todoCompleted event: ');
    this.modal_active = false
  }

  openModal() {
    this.modal_active = !this.modal_active;
  }

  render() {
    return (
      <div>
        <mastodon-button text={this.button_text} onClick={() => this.openModal()}></mastodon-button>
        <mastodon-modal activated={this.modal_active} instances={this.instances} share_text={this.share_text}></mastodon-modal>
      </div>
    );
  }
}
