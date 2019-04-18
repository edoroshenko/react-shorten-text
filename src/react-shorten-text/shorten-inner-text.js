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
  const tail = ELLIPSIS + oldContent.slice(oldContentLength - tailLength);

  const offsetWidth = parent.offsetWidth;

  while(parent.scrollWidth > offsetWidth && oldContentLength > minLength) {
    oldContent = child.textContent;
    oldContentLength = oldContent.length;

    child.textContent = oldContent.slice(0, oldContentLength - minLength - 1) + tail;
  }

  return () => child.textContent = initialContent;
}
