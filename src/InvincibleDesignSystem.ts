import { html, css, CSSResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { BaseComponent } from './components/BaseComponent.js';

@customElement('invincible-design-system')
export class InvincibleDesignSystem extends BaseComponent {
  static styles = [
    BaseComponent.styles,
    css`
      h2 {
        background-color: yellow;
      }
    ` as CSSResult,
  ];

  @property({ type: String }) header = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <div>
        <h2>${this.header} Nr. ${this.counter}!</h2>
        <invincible-button @button-click="${this.__increment}"
          >Increment</invincible-button
        >
      </div>
    `;
  }
}
