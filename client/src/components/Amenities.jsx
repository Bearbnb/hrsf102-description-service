import React from 'react';
import PropTypes from 'prop-types';

import Amenity from './Amenity.jsx';

import { generateAmenitiesArray } from '../../../seedDatabase/helpers';
import styles from '../../../styles/Amenities.css';

const Amenities = ({ amenities, hideAmenities, showModal }) => {
  const display = showModal ? styles.displayBlock : styles.displayNone;

  if (showModal) {
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    document.querySelector('body').style.overflow = null;
  }

  const amenitiesArray = generateAmenitiesArray(amenities);
  return (
    <div>
      <div
        className={`${display} ${styles.modalBackdrop}`}
        onClick={() => hideAmenities()}
      >
      </div>

      <div className={`${display} ${styles.modalMain}`}>
        <h1>Amenities</h1>
        {amenitiesArray.map(amenity => <Amenity key={amenity.id} availableAmenity={amenity} />)}
      </div>

    </div>
  );
};

Amenities.propTypes = {
  amenities: PropTypes.shape({
    id: PropTypes.number,
    _id: PropTypes.string,
    basics: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        details: PropTypes.string,
      }),
    ),
    bedAndBath: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        details: PropTypes.string,
      }),
    ),
    dining: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        details: PropTypes.string,
      }),
    ),
    guestAccess: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        details: PropTypes.string,
      }),
    ),
    safetyFeautes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        details: PropTypes.string,
      }),
    ),
    notIncluded: PropTypes.arrayOf(PropTypes.string),
  }),
  hideAmenities: PropTypes.func,
  showModal: PropTypes.bool,
};

Amenities.defaultProps = {
  amenities: {},
  hideAmenities: null,
  showModal: false,
};

export default Amenities;
