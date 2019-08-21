import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'cwc-test-component',
  styleUrl: "./side-drawer.css",
  shadow: true
})

export class TestComponent {
  @Prop({reflectToAttr: true}) title: string;
  @Prop({reflectToAttr: true}) open: boolean;
  
  onCloseSideDraws() {
    this.open = false;
  }

  render() {
    return (
      <aside>
        <header>
          <h1>{ this.title }</h1>
          <button onClick={this.onCloseSideDraws.bind(this)} class="closeSideDraws">X</button>
        </header>
        <main>
          <slot />
        </main>
      </aside>      
    );
  }
}

