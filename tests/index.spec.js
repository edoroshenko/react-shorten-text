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
      'div', { className: 'simple-container' },
      createElement(
        ShortenText, { className: 'shorten-text', tailLength: 5 },
        LONGEST_WORD
      )
    ),
    container,
  );
}

describe('ReactShortenText', function () {
  it('should fit long text into a limited width', async () => {
    const page = await bootstrap();

    await page.evaluate(renderSimpleTestApp, { LONGEST_WORD });

    const { wrapperWidth, childrenWidths} = await page.evaluate(() => {
      const wrapper = document.querySelector('.shorten-text');
      const { width: wrapperWidth } = wrapper.getBoundingClientRect();
      const childrenWidths = Array.from(wrapper.childNodes)
        .map(node => node.getBoundingClientRect().width);

      return {
        wrapperWidth,
        childrenWidths
      }
    });

    expect(wrapperWidth)
      .toEqual(childrenWidths.reduce((result, width) => result + width, 0));
  })
});
