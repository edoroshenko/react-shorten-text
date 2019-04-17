import React, { useRef, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import shortenInnerText from './shorten-inner-text'

export default function ReactShortenText({children}) {
  const wrapperRef = useRef(null);
  const [, setState] = useState(null);
  useLayoutEffect(() => {
    const restore = shortenInnerText(wrapperRef.current, 5);

    const observer = new ResizeObserver(() => {
      console.log('resize')

      requestAnimationFrame(() => {
        restore();

        shortenInnerText(wrapperRef.current, 5);
      })
    });

    observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  })

  return <div ref={wrapperRef}>{children}</div>;
}

ReactShortenText.propTypes = {
  children: PropTypes.string
}
