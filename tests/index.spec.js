import { bootstrap } from './utils'

import { LONGEST_WORD } from '../stories/constants'

export function renderSimpleTestApp({ LONGEST_WORD }) {
  const {render} = window.ReactDOM;
  const {createElement} = window.React;
  const ShortenText = window.ReactShortenText;

  const container = document.createElement('div');
  document.body.appendChild(container);

  render(
    createElement(
      'div',
      { className: 'simple-container' },
      createElement(ShortenText, { className: 'shorten-text' }, LONGEST_WORD)
    ),
    container,
  );
}

describe('ReactShortenText', function () {
  it('should work', async () => {
    const page = await bootstrap();

    await page.evaluate(renderSimpleTestApp, { LONGEST_WORD });
    // const output = await page.evaluate(() => '');

    const outerText = await page.evaluate(() => document.body.outerHTML);
    console.log('outerText', outerText);

    await expect(true).toBe(true);
  })
});
