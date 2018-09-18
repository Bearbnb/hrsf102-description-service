import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles/HomeHighlight.css';

const Highlight = ({ highlight }) => (
  <div>
    <span
      className={styles.highlight}
    >{highlight.highlight}
    </span>

    <span className={styles.interpunct}>·</span>

    <span
      className={styles.details}
    >{highlight.details}
    </span>
  </div>
);

Highlight.propTypes = {
  highlight: PropTypes.objectOf(PropTypes.string),
};

Highlight.defaultProps = {
  highlight: {
    highlight: 'Self Check-in',
    details: 'Easily check yourself in with the lockbox.',
  },
};

export default Highlight;
