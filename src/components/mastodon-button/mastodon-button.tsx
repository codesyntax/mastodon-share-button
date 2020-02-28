import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'mastodon-button',
  styleUrl: 'mastodon-button.css',
  shadow: true
})
export class MastodonButton {

  @Prop() text: string;

  render() {
    return (
      <button >{this.text}</button>
    );
  }
}
