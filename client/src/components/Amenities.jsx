import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/Amenities.css';

const Amenities = ({ amenities, hideAmenities, showModal }) => {
  const display = showModal ? styles.displayBlock : styles.displayNone;

  return (
    <div
      className={`${display} ${styles.modal}`}
      onClick={() => hideAmenities()}
    >
      <div className={styles.modalMain}>
        <button type="button" onClick={() => hideAmenities()}>close</button>
      </div>
    </div>
  );
};

export default Amenities;
