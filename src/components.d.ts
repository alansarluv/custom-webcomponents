/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface CwcTestComponent {
    'open': boolean;
    'title': string;
  }
}

declare global {


  interface HTMLCwcTestComponentElement extends Components.CwcTestComponent, HTMLStencilElement {}
  var HTMLCwcTestComponentElement: {
    prototype: HTMLCwcTestComponentElement;
    new (): HTMLCwcTestComponentElement;
  };
  interface HTMLElementTagNameMap {
    'cwc-test-component': HTMLCwcTestComponentElement;
  }
}

declare namespace LocalJSX {
  interface CwcTestComponent extends JSXBase.HTMLAttributes<HTMLCwcTestComponentElement> {
    'open'?: boolean;
    'title'?: string;
  }

  interface IntrinsicElements {
    'cwc-test-component': CwcTestComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


