import React from 'react';
import PropTypes from 'prop-types';

import Amenity from './Amenity.jsx';

import { generateAmenitiesArray } from '../../../seedDatabase/helpers';
import styles from '../../../styles/Amenities.css';

const Amenities = ({
  amenities,
  hideAmenities,
  showModal,
  hideAmenitiesPress,
}) => {
  const display = showModal ? styles.displayBlock : styles.displayNone;

  const amenitiesArray = generateAmenitiesArray(amenities);
  return (
    <div
      className={`${display} ${styles.modalBackdrop}`}
      onClick={() => hideAmenities()}
    >
      <div 
        className={`${styles.modalMain}`}
      >
        <h1 className={styles.title}>Amenities</h1>
        {amenitiesArray.map((amenity, i) => <Amenity key={i} availableAmenity={amenity} />)}
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
  hideAmenitiesPress: PropTypes.func,
  showModal: PropTypes.bool,
};

Amenities.defaultProps = {
  amenities: {},
  hideAmenities: () => {},
  hideAmenitiesPress: () => {},
  showModal: false,
};

export default Amenities;
