import React, { useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

const onResizeCell = () => document.dispatchEvent(new Event('resize-cell'));

const observer = new ResizeObserver(onResizeCell);

const ELLIPSIS = '...';

const wrapperStyle = {
  overflow: 'hidden',
  position: 'relative'
};

const contentStyle = {
  overflow: 'hidden'
};

const tailStyle = {
  position: 'absolute',
  right: '0',
  top: '0'
};

export default function ReactShortenText({ children, tailLength }: { children: string, tailLength: number }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const tailRef = useRef(null);

  useLayoutEffect(() => {
    const content = contentRef.current;
    const tail = tailRef.current;
    const tailWidth = tail.offsetWidth;

    content.style.marginRight = `${tailWidth}px`;
  });

  const tail = ELLIPSIS + children.slice(children.length - tailLength);

  return <div ref={wrapperRef} style={wrapperStyle}>
    <div ref={contentRef} style={contentStyle}>{children}</div>
    <div ref={tailRef} style={tailStyle}>{tail}</div>
  </div>;
}

ReactShortenText.propTypes = {
  children: PropTypes.string.isRequired,
  tailLength: PropTypes.number
};

ReactShortenText.defaultProps = {
  tailLength: 0
};
