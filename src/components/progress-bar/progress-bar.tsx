import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'cwc-progress-bar',
  styleUrl: "./progress-bar.css",
  shadow: true
})

export class ProgressBar {
  @Prop() fillColor: string;
  @Prop() baseColor: string;
  @Prop() fillPrecent: number;

  @Element() fillElement: HTMLElement;

  render() {
    return (
      <div class="cwc-progress default">
        <div class="cwc-progress-fill"></div>
      </div>
    )
  }
}