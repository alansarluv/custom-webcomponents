import { Component, h } from '@stencil/core';

@Component({
  tag: 'cwc-test-component',
  styleUrl: "./side-drawer.css",
  shadow: true
})

export class TestComponent {
  render() {
    return (
      <aside>
        <h1>Test Create Component</h1>
      </aside>      
    );
  }
}

