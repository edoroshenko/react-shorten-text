import { bootstrap } from './bootstrap'

import { LONGEST_WORD } from '../stories/constants'

import renderSimpleApp from './render-simple-app'

describe('ReactShortenText', function () {
  it('should fit long text into a limited width', async () => {
    const page = await bootstrap();
    await page.evaluate(renderSimpleApp, { LONGEST_WORD });

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

    page.close();

    expect(childRects[0].top).toEqual(wrapperRect.top);
    expect(childRects[0].right).toBeLessThan(wrapperRect.right);
    expect(childRects[0].bottom).toEqual(wrapperRect.bottom);
    expect(childRects[0].left).toEqual(wrapperRect.left);

    expect(childRects[1].top).toEqual(wrapperRect.top);
    expect(childRects[1].right).toEqual(wrapperRect.right);
    expect(childRects[1].bottom).toEqual(wrapperRect.bottom);
    expect(childRects[1].left).toBeGreaterThan(wrapperRect.left);

    expect(wrapperRect.width).toEqual(childRects[0].width + childRects[1].width);
  });
  it('should update fast when the window got resized', async () => {
    const page = await bootstrap();
    await page.evaluate(renderSimpleApp, { LONGEST_WORD });

    page.close();
  });
});
