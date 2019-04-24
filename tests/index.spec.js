import { bootstrap } from './bootstrap';

import {
  LONGEST_WORD,
  ACCEPTABLE_RENDER_TIME,
  ACCEPTABLE_UPDATE_TIME
} from '../stories/constants';

import renderHeavyApp from './render-heavy-app';

describe('ReactShortenText', function () {
  it('should update fast when the window got resized', async () => {
    const page = await bootstrap();

    const beforeRenderTS = (new Date()).getTime();

    await page.evaluate(renderHeavyApp, { LONGEST_WORD });

    const afterRenderTS = (new Date()).getTime();

    const inititalLastChildWidth = await page.evaluate(() => {
      return document
        .querySelector('.table-container tr:last-child td:last-child')
        .offsetWidth;
    });

    const beforeUpdateTS = (new Date()).getTime();

    const updatedLastChildWidth = await page.evaluate(() => {
      document
        .querySelector('.table-container')
        .classList.add('table-container__narrow');

      return document
        .querySelector('.table-container tr:last-child td:last-child')
        .offsetWidth;
    });

    const afterUpdateTS = (new Date()).getTime();

    page.close();

    // By comparing the width of last cell
    // we make sure that the update had finished
    expect(updatedLastChildWidth).toBeLessThan(inititalLastChildWidth);
    expect(afterRenderTS - beforeRenderTS).toBeLessThan(ACCEPTABLE_RENDER_TIME);
    expect(afterUpdateTS - beforeUpdateTS).toBeLessThan(ACCEPTABLE_UPDATE_TIME);
  });
});
