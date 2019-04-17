import React from 'react';
import PropTypes from 'prop-types';

export default function ReactShortenText({children}) {
  return children;
}

ReactShortenText.propTypes = {
  children: PropTypes.string
}
