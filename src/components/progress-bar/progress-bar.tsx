import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'cwc-progress-bar',
  styleUrl: "./progress-bar.css",
  shadow: true
})

export class ProgressBar {
  @Prop({reflectToAttr: true}) fillcolor: string;
  @Prop({reflectToAttr: true}) basecolor: string;
  @Prop({reflectToAttr: true}) fillprecent: number;

  @Element() el: HTMLElement;

  render() {
    const styleProgressBase = { 'background-color': this.basecolor }
    const styleProgressFill = { 'background-color': this.fillcolor, 'width' : this.fillprecent+'%' }
    return [
      <div class="cwc-progress default" style={styleProgressBase}>
        <div class="cwc-progress-fill" style={styleProgressFill}></div>
      </div>
    ]
  }
}