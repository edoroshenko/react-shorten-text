const TIMEOUT = 20000

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3001/index.html');
  }, TIMEOUT)

  it('should display "google" text on page', async () => {
    const divsCounts = await page.$$eval('td', divs => divs.length);

    return expect(divsCounts).toBe(18);
  }, TIMEOUT)
})
