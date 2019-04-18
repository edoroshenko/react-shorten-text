const ELLIPSIS = '...';
const ellipsisLength = ELLIPSIS.length;
function doNothing() {}

export default function shortenInnerText(parent: HTMLElement, tailLength: number = 0): function {
  const { childNodes } = parent;

  // Working only with parents with a single child node
  if (childNodes.length !== 1) {
    return doNothing;
  }

  const child = childNodes[0];

  // Working only with text child node
  if (child instanceof Text === false) {
    return doNothing;
  }

  const minLength = ellipsisLength + tailLength;
  const initialContent = child.textContent;

  let oldContent = initialContent;
  let oldContentLength = oldContent.length;

  if (oldContentLength < minLength) {
    return doNothing;
  }

  const tail = ELLIPSIS + oldContent.slice(oldContentLength - tailLength);
  const offsetWidth = parent.offsetWidth;

  if (parent.scrollWidth <= offsetWidth) {
    return doNothing;
  }

  let leftEdge = 0;
  let rightEdge = oldContentLength - minLength;

  // TODO: improve the condition
  while(rightEdge - leftEdge > 1) {
    let middle = Math.round((rightEdge + leftEdge) / 2);

    child.textContent = oldContent.slice(0, middle) + tail;

    if (parent.scrollWidth > offsetWidth) {
      rightEdge = middle;
    } else {
      leftEdge = middle;
    }
  }

  return () => child.textContent = initialContent;
}
