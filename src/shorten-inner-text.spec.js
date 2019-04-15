describe('Google', () => {
  beforeAll(() => {
    return page.goto('https://google.com');
  })

  it('should display "google" text on page', () => {
    return expect(page).toMatch('google');
  })
})
