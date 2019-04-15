describe('Google', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/index.html');
  })

  it('should display "google" text on page', async () => {
    const divsCounts = await page.$$eval('td', divs => divs.length);

    return expect(divsCounts).toBe(18);
  })
})
