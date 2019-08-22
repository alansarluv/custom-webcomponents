import { Component, h, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'cwc-test-component',
  styleUrl: "./side-drawer.css",
  shadow: true
})

export class TestComponent {
  @State() showContactInfo = false;

  @Prop({reflectToAttr: true}) title: string;
  @Prop({reflectToAttr: true}) opened: boolean;

  @Method()
  open() {
    this.opened = true;
  }
  
  onCloseSideDraws() {
    this.opened = false;
  }

  onContentChange(content: string) {
    this.showContactInfo = content === 'contact';
  }

  render() {
    let mainContent = <slot />;
    if (this.showContactInfo) {
      mainContent = (
        <div id="contact-information">
          <h2>Contact information</h2>
          <p>You can reach us via phone or email</p>
          <ul>
            <li>Phone: 08771829302719</li>
            <li>Email: 
              <a href="mailto:something@something.com">
                something@something.com
              </a>
            </li>
          </ul>
        </div>
      );
    }
    return (
      <aside>
        <header>
          <h1>{ this.title }</h1>
          <button onClick={this.onCloseSideDraws.bind(this)} class="closeSideDraws">X</button>
        </header>
        <section id="tabs">
          <button class={!this.showContactInfo ? 'active' : ''} onClick={this.onContentChange.bind(this, 'nav')}>Navigation</button>
          <button class={this.showContactInfo ? 'active' : ''} onClick={this.onContentChange.bind(this, 'contact')}>Contact</button>
        </section>
        <main>
          {mainContent}
        </main>
      </aside>      
    );
  }
}

