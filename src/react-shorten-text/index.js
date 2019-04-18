import React, { useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import shortenInnerText from './shorten-inner-text'

const onResizeCell = () => document.dispatchEvent(new Event('resize-cell'));

const observer = new ResizeObserver(onResizeCell);

export default function ReactShortenText({ children, tailLength }: { children: string, tailLength: number }) {
  const wrapperRef = useRef(null);
  useLayoutEffect(() => {
    const restore = shortenInnerText(wrapperRef.current, tailLength);
    const onResizeCell = () => {
      // TODO: try to decrease a number of resizes
      restore();
      shortenInnerText(wrapperRef.current, tailLength);
    };

    document.addEventListener('resize-cell', onResizeCell);
    observer.observe(wrapperRef.current);

    return () => {
      document.removeEventListener('resize-cell', onResizeCell);
      observer.unobserve(wrapperRef.current);
    };
  });

  return <div ref={wrapperRef}>{children}</div>;
}

ReactShortenText.propTypes = {
  children: PropTypes.string.isRequired,
  tailLength: PropTypes.number
};

ReactShortenText.defaultProps = {
  tailLength: 0
};
