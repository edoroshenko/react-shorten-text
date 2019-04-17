import React from 'react';
import PropTypes from 'prop-types';

export default function ReactShortenText() {
  return this.props.children;
}

ReactShortenText.propTypes = {
  children: PropTypes.string
}
