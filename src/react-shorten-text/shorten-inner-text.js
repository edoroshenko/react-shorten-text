const ELLIPSIS = '...'
const ellipsisLength = ELLIPSIS.length

export default function shortenInnerText(parent: HTMLElement, tailLength: number): void {
  const { childNodes } = parent

  // Working only with parents with a single child node
  if (childNodes.length !== 1) {
    return;
  }

  const child = childNodes[0].nodeType
  
  // Working only with text child node
  if (child instanceof Text === false) {
    return;
  }

  const minLength = ellipsisLength + tailLength

  let oldContent = child.textContent
  const tail = ELLIPSIS + oldContent.slice(oldContent.length - tailLength)

  while(parent.scrollWidth > parent.offsetWidth && oldContent.length > minLength) {
    oldContent = child.textContent

    child.textContent = oldContent.slice(0, oldContent.length - minLength - 1) + tail
  }
}
