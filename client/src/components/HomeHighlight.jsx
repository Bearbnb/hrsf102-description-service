import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles/HomeHighlight.css';

const HomeHighlight = ({ highlight }) => (
  <div className={styles.container}>
    <span
      className={styles.highlight}
    >{highlight.highlight}
    </span> · <span
      className={styles.details}
    >{highlight.details}
    </span>

    <div className={styles.helpful}>
      <button
        className={styles.button}
        type="button"
      >Helpful
        <i className="far fa-thumbs-up" />
      </button>

      <span className={styles.interpunct}> · </span>

      <button
        className={styles.button}
        type="button"
      >Not Helpful
      </button>
    </div>

  </div>
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
