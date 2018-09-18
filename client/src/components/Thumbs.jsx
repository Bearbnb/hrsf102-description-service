import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles/HomeHighlight.css';


const Thumbs = ({ handleClick }) => (
  <div className={styles.helpful}>

    <button
      className={styles.button}
      type="button"
      onClick={() => handleClick()}
    >Helpful
      <i className="far fa-thumbs-up" />
    </button>

    <span className={styles.interpunct}>·</span>

    <button
      className={styles.button}
      type="button"
      onClick={() => handleClick()}
    >Not Helpful
    </button>

  </div>
);

Thumbs.propTypes = {
  handleClick: PropTypes.func,
};

Thumbs.defaultProps = {
  handleClick: () => {},
};

export default Thumbs;
