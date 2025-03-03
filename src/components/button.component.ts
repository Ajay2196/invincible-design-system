import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from './BaseComponent.js';

@customElement('invincible-button')
export class InvincibleButton extends BaseComponent {
  static styles = [
    BaseComponent.styles,
    css`
      :host {
        display: inline-block;
      }

      .button {
        font-family: var(--font-family-base, sans-serif);
        font-size: var(--font-size-base, 16px);
        font-weight: var(--font-weight-semibold, 600);
        line-height: var(--line-height-base, 1.5);
        padding: var(--spacing-s, 8px) var(--spacing-m, 16px);
        border-radius: var(--border-radius-small, 4px);
        border: none;
        cursor: pointer;
        transition:
          background-color var(--transition-fast, 0.2s) ease,
          color var(--transition-fast, 0.2s) ease,
          box-shadow var(--transition-fast, 0.2s) ease;
      }

      .button:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
      }

      .button:disabled {
        opacity: 0.65;
        cursor: not-allowed;
      }

      /* Primary Button */
      .button--primary {
        background-color: var(--color-primary, #007bff);
        color: var(--color-light, #f8f9fa);
      }

      .button--primary:hover:not(:disabled),
      .button--primary:focus:not(:disabled) {
        background-color: var(--color-primary-dark, #0056b3);
      }

      /* Secondary Button */
      .button--secondary {
        background-color: var(--color-secondary, #6c757d);
        color: var(--color-light, #f8f9fa);
      }

      .button--secondary:hover:not(:disabled),
      .button--secondary:focus:not(:disabled) {
        background-color: var(--color-secondary-dark, #545b62);
      }

      /* Outline Button */
      .button--outline {
        background-color: transparent;
        border: 1px solid var(--color-primary, #007bff);
        color: var(--color-primary, #007bff);
      }

      .button--outline:hover:not(:disabled),
      .button--outline:focus:not(:disabled) {
        background-color: var(--color-primary, #007bff);
        color: var(--color-light, #f8f9fa);
      }

      /* Small Button */
      .button--small {
        font-size: var(--font-size-small, 14px);
        padding: var(--spacing-xs, 4px) var(--spacing-s, 8px);
      }

      /* Large Button */
      .button--large {
        font-size: var(--font-size-h4, 20px);
        padding: var(--spacing-m, 16px) var(--spacing-l, 24px);
      }
    `,
  ];

  @property({ type: String }) variant: 'primary' | 'secondary' | 'outline' =
    'primary';

  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';

  @property({ type: Boolean }) disabled = false;

  render() {
    const classes = [
      'button',
      `button--${this.variant}`,
      this.size !== 'medium' ? `button--${this.size}` : '',
    ]
      .filter(Boolean)
      .join(' ');

    return html`
      <button
        class="${classes}"
        ?disabled="${this.disabled}"
        @click=${this.handleClick}
      >
        <slot></slot>
      </button>
    `;
  }

  private handleClick(e: MouseEvent) {
    this.dispatchEvent(
      new CustomEvent('button-click', { detail: { originalEvent: e } }),
    );
  }
}
