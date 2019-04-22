import React from 'react';
import PropTypes from 'prop-types';

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden'
};

const contentStyle = {
  flexGrow: '0',
  flexShrink: '1',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
};

const tailStyle = {
  flexGrow: '1',
  flexShrink: '0'
};

export default function ReactShortenText({ children, tailLength, ...restHtmlAttrs }) {
  const content = children.slice(0, children.length - tailLength);
  const tail = children.slice(children.length - tailLength);

  return <div style={wrapperStyle} {...restHtmlAttrs}>
    <div style={contentStyle}>{content}</div>
    <div style={tailStyle}>{tail}</div>
  </div>;
}

ReactShortenText.propTypes = {
  children: PropTypes.string.isRequired,
  tailLength: PropTypes.number.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};
