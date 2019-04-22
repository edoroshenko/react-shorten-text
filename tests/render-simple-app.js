export default function renderSimpleApp({ LONGEST_WORD }) {
  // Can't use imports, because this code is being run on the puppeteer page
  const {render} = window.ReactDOM;
  const {createElement} = window.React;
  const ShortenText = window.ReactShortenText;

  const container = document.createElement('div');
  container.classList.add('simple-container');
  document.body.appendChild(container);

  render(
    createElement(
      ShortenText, { className: 'shorten-text', tailLength: 5 },
      LONGEST_WORD
    ),
    container,
  );
}
