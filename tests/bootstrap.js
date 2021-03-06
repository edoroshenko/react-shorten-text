/**
 * Opens a page in the headless browser and returns a pointer on it
 * @return {Promise<*>}
 */
export async function bootstrap() {
  const page = await global.browser.newPage();
  const scripts = [
    './node_modules/react/umd/react.development.js',
    './node_modules/react-dom/umd/react-dom.development.js',
    './node_modules/prop-types/prop-types.js',
    './build/index.umd.js',
  ];
  const stylesheets = [
    './src/index.css',
    './stories/index.css'
  ];

  for (const path of scripts) {
    await page.addScriptTag({path});
  }

  for (const path of stylesheets) {
    await page.addStyleTag({path});
  }

  return page;
}
