import React from 'react';
import PropTypes from 'prop-types';

export default function ReactShortenText({ children, tailLength, ...restHtmlAttrs }) {
  const head = children.slice(0, children.length - tailLength);
  const tail = children.slice(children.length - tailLength);

  return <div className="react-shorten-text" {...restHtmlAttrs}>
    <div className="react-shorten-text__full-text">{children}</div>
    <div
      className="react-shorten-text__short-text"
      data-head={head}
      data-tail={tail}
    />
  </div>;
}

ReactShortenText.propTypes = {
  children: PropTypes.string.isRequired,
  tailLength: PropTypes.number.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};
