import React, { useRef } from 'react';
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

export default function ReactShortenText({ children, tailLength }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const tailRef = useRef(null);

  const content = children.slice(0, children.length - tailLength);
  const tail = children.slice(children.length - tailLength);

  return <div ref={wrapperRef} style={wrapperStyle}>
    <div ref={contentRef} style={contentStyle}>{content}</div>
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
