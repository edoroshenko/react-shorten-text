const ELLIPSIS = '...'
const ellipsisLength = ELLIPSIS.length
function doNothing() {}

export default function shortenInnerText(parent: HTMLElement, tailLength: number = 0): function {
  const { childNodes } = parent

  // Working only with parents with a single child node
  if (childNodes.length !== 1) {
    return doNothing;
  }

  const child = childNodes[0]

  // Working only with text child node
  if (child instanceof Text === false) {
    return doNothing;
  }

  const minLength = ellipsisLength + tailLength
  const initialContent = child.textContent

  let oldContent = initialContent
  const tail = ELLIPSIS + oldContent.slice(oldContent.length - tailLength)
  const offsetWidth = parent.offsetWidth

  while(parent.scrollWidth > offsetWidth && oldContent.length > minLength) {
    oldContent = child.textContent

    child.textContent = oldContent.slice(0, oldContent.length - minLength - 1) + tail
  }

  return () => parent.childNodes[0].textContent = initialContent
}
