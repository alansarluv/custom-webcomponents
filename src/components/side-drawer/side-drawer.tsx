import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'cwc-test-component',
  styleUrl: "./side-drawer.css",
  shadow: true
})

export class TestComponent {
  @Prop({reflectToAttr: true}) title: string;

  render() {
    return (
      <aside>
        <header>
          <h1>{ this.title }</h1>
        </header>
        <main>
          <slot />
        </main>
      </aside>      
    );
  }
}

