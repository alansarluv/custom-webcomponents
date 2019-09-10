import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'cwc-digital-clock',
  styleUrl: "./digital-clock.css",
  shadow: true
})

export class DigitalClock {
    @State() timeValSec = 0;
    @State() timeValMin = 0;
    @State() timeValHour = 0;

  componentDidLoad() {
    setInterval(() => this.runClock(new Date()), 1000);
  }
  runClock(val) {
    this.timeValSec = val.getSeconds() * 6;
    this.timeValMin = val.getMinutes() * 6;
    this.timeValHour = val.getHours() * 30;
  }
  render() {
    return [
      <div id="cwc-clock_wrap">
        <div class="cwc-clock-rotatingWrapper" style={{'transform': 'rotate('+this.timeValHour+'deg)'}}>
          <span class="cwc-hour-pointer"></span>
        </div>
        <div class="cwc-clock-rotatingWrapper" style={{'transform': 'rotate('+this.timeValMin+'deg)'}}>
          <span class="cwc-min-pointer"></span>
        </div>
        <div class="cwc-clock-rotatingWrapper" style={{'transform': 'rotate('+this.timeValSec+'deg)'}}>
          <span class="cwc-sec-pointer"></span>
        </div>
        <div class="cwc-clock-base"></div>
      </div>
    ];
  }
}