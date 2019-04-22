import { bootstrap } from './utils'

import { LONGEST_WORD } from '../stories/constants'

export function renderSimpleTestApp({ LONGEST_WORD }) {
  // Can't use imports, because this code is being run on the puppeteer page
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

    const { wrapperRect, childRects } = await page.evaluate(() => {
      const wrapper = document.querySelector('.shorten-text');
      // Destructuring to prevent returning of DOMRect,
      // which isn't being passed properly.
      const { top, right, bottom, left, width } = wrapper.getBoundingClientRect();

      return {
        wrapperRect: { top, right, bottom, left, width },
        childRects: Array
          .from(wrapper.childNodes)
          .map(node => {
            const { top, right, bottom, left, width } = node.getBoundingClientRect();

            return { top, right, bottom, left, width };
          })
      };
    });

    expect(childRects[0].top).toEqual(wrapperRect.top);
    expect(childRects[0].right).toBeLessThan(wrapperRect.right);
    expect(childRects[0].bottom).toEqual(wrapperRect.bottom);
    expect(childRects[0].left).toEqual(wrapperRect.left);

    expect(childRects[1].top).toEqual(wrapperRect.top);
    expect(childRects[1].right).toEqual(wrapperRect.right);
    expect(childRects[1].bottom).toEqual(wrapperRect.bottom);
    expect(childRects[1].left).toBeGreaterThan(wrapperRect.left);

    expect(wrapperRect.width).toEqual(childRects[0].width + childRects[1].width);
  })
});
