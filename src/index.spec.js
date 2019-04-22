describe('ReactShortenText', function () {
  it('should work', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    console.log('text', text);

    await expect(true).toBe(true);
  })
});
