'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shortenInnerText;
var ELLIPSIS = '...';
var ellipsisLength = ELLIPSIS.length;

function shortenInnerText(parent, tailLength) {
  var childNodes = parent.childNodes;

  // Working only with parents with a single child node

  if (childNodes.length !== 1) {
    return;
  }

  var child = childNodes[0].nodeType;

  // Working only with text child node
  if (child instanceof Text === false) {
    return;
  }

  var minLength = ellipsisLength + tailLength;

  var oldContent = child.textContent;
  var tail = ELLIPSIS + oldContent.slice(oldContent.length - tailLength);

  while (parent.scrollWidth > parent.offsetWidth && oldContent.length > minLength) {
    oldContent = child.textContent;

    child.textContent = oldContent.slice(0, oldContent.length - minLength - 1) + tail;
  }
}