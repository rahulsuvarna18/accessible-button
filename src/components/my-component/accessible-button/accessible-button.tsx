import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'accessible-button',
  shadow: true,
  styleUrl: './accessible-button.css',
})
export class AccessibleButton {
  @Prop() label: string;
  @Prop() disabled: boolean = false;

  render() {
    return (
      <button type="button" disabled={this.disabled} aria-disabled={this.disabled ? 'true' : 'false'}>
        {this.label}
      </button>
    );
  }
}
