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
  top: '0',
  display: 'none'
};

export default function ReactShortenText({ children, tailLength }: { children: string, tailLength: number }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const tailRef = useRef(null);

  useLayoutEffect(() => {
    function onResizeCell() {
      const wrapper = wrapperRef.current;
      const content = contentRef.current;
      const tail = tailRef.current;

      if (wrapper.offsetWidth < content.scrollWidth) {
        tail.style.display = 'block';
        content.style.marginRight = `${tail.offsetWidth}px`;
      } else if (tail.style.display === 'block') {
        tail.style.display = 'none';
        content.style.marginRight = '0px';
      }
    }

    onResizeCell();

    document.addEventListener('resize-cell', onResizeCell);
    observer.observe(wrapperRef.current);

    return () => {
      document.removeEventListener('resize-cell', onResizeCell);
      observer.unobserve(wrapperRef.current);
    };
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
