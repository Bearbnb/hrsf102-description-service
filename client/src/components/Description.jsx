import React from 'react';
import styles from '../../../styles/Description.css';

const Description = ({ description }) => (
  <div className={styles.container}>
    <div>
      {description}
    </div>
    <button
      className={styles.button}
      type="button"
    >Read more about the space
    </button>

  </div>
);

export default Description;
