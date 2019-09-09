import { Component, h } from '@stencil/core';

@Component({
  tag: 'cwc-digital-clock',
  styleUrl: "./digital-clock.css",
  shadow: true
})

export class DigitalClock {
  
  render() {
    return [
      <div id="cwc-clock_wrap">
        <div class="cwc-clock-rotatingWrapper">
          <span class="cwc-hour-pointer"></span>
        </div>
        <div class="cwc-clock-rotatingWrapper">
          <span class="cwc-min-pointer"></span>
        </div>
        <div class="cwc-clock-rotatingWrapper">
          <span class="cwc-sec-pointer"></span>
        </div>
        <div class="cwc-clock-base"></div>
      </div>      
    ];
  }
}