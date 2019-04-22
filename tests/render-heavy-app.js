export default function renderHeavyApp({ LONGEST_WORD }) {
  // Can't use imports, because this code is being run on the puppeteer page
  const {render} = window.ReactDOM;
  const {createElement} = window.React;
  const ShortenText = window.ReactShortenText;

  const container = document.createElement('div');
  document.body.appendChild(container);

  render(
    createElement(
      'table', { className: 'table-container' },
      createElement(
        'tbody', {},
        (() => {
          const rows = [];

          for (let i = 0; i < 2000; i++) {
            rows.push(
              createElement('tr', {key: i}, [
                createElement('td', {className: "table-cell"},
                  createElement(ShortenText, {tailLength: 5}, LONGEST_WORD)
                ),
                createElement('td', {className: "table-cell"},
                  createElement(ShortenText, {tailLength: 5}, LONGEST_WORD)
                )
              ])
            )
          }

          return rows;
        })()
      )
    ),
    container,
  );
}