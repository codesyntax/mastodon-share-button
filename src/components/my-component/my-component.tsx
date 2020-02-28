import { Component, Prop, h, Listen } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
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
    console.log(this.instances)
    return (
      <div>
        <mastodon-button text={this.button_text} onClick={() => this.openModal()}></mastodon-button>
        <mastodon-modal activated={this.modal_active} instances={this.instances} share_text={this.share_text}></mastodon-modal>
      </div>
    );
  }
}
