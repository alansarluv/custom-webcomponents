import { Component, h } from '@stencil/core';

@Component({
  tag: 'cwc-test-component'
})

export class TestComponent {
  render() {
    return (
      <div>
        <h1>Test Create Component</h1>
      </div>      
    );
  }
}

