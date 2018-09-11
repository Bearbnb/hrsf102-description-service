import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles/HomeHighlight.css';

const HomeHighlight = ({ highlight }) => (
  <div className={styles.container}><span>{highlight.highlight}</span> · {highlight.details}</div>
);

HomeHighlight.propTypes = {
  highlight: PropTypes.objectOf(PropTypes.string),
};

HomeHighlight.defaultProps = {
  highlight: {
    highlight: 'Self Check-in',
    details: 'Easily check yourself in with the lockbox.',
  },
};

export default HomeHighlight;
