import { newE2EPage } from '@stencil/core/testing';

describe('mastodon-share-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<mastodon-share-button></mastodon-share-button>');
    const element = await page.find('mastodon-share-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<mastodon-share-button></mastodon-share-button>');
    const component = await page.find('mastodon-share-button');
    const element = await page.find('mastodon-share-button >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
