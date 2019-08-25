import { Component, h } from '@stencil/core';

@Component({
  tag: 'cwc-pophover',
  styleUrl: "./pophover.css",
  shadow: true
})

export class Pophover {
  
  render() {
    return [
      <h2>Pop hover component here </h2>
    ];
  }
}