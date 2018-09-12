import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/Amenities.css';

const Amenities = ({ amenities, hideAmenities, showModal }) => {
  const display = showModal ? styles.displayBlock : styles.displayNone;

  return (
    <div>
      <div
      className={`${display} ${styles.modal}`}
      onClick={() => hideAmenities()}
      >
      </div>

      <div className={`${display} ${styles.modalMain}`}>
        Amenities
      </div>
    </div>
  );
};

export default Amenities;
