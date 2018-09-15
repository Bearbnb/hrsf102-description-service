import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles/Description.css';


const Description = ({ description }) => (
  <div className={styles.container}>
    <p>
      {description}
    </p>
    <button
      className={styles.button}
      type="button"
    >Read more about the space
    </button>

  </div>
);

Description.propTypes = {
  description: PropTypes.string,
};

Description.defaultProps = {
  description: '',
};

export default Description;
