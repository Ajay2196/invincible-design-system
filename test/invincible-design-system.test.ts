import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { InvincibleDesignSystem } from '../src/InvincibleDesignSystem.js';
import '../src/invincible-design-system.js';

describe('InvincibleDesignSystem', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<InvincibleDesignSystem>(html`<invincible-design-system></invincible-design-system>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<InvincibleDesignSystem>(html`<invincible-design-system></invincible-design-system>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<InvincibleDesignSystem>(html`<invincible-design-system header="attribute header"></invincible-design-system>`);

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<InvincibleDesignSystem>(html`<invincible-design-system></invincible-design-system>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
