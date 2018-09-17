import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles/Amenity.css';

const Amenity = ({ availableAmenity }) => {
  const amenityFormatMap = {
    basics: 'Basics',
    guestAccess: 'Guest Access',
    bedAndBath: 'Bed and Bath',
    safetyFeatures: 'Safety Features',
    notIncluded: 'Not Included',
  };

  return (
    <div className={styles.amenity}>
      <h3 className={styles.title}>
        {amenityFormatMap[availableAmenity.amenity]}
      </h3>
      <div className={styles.border} />
      {availableAmenity.amenities.map((amenity => (
        <p>{amenity.name}</p>
      )))}
    </div>
  );
};

Amenity.propTypes = {
  availableAmenity: PropTypes.shape({
    name: PropTypes.string,
    details: PropTypes.string,
  }),
};

Amenity.defaultProps = {
  availableAmenity: {
    amenity: 'basics',
    amenities: [{ name: 'Heating', details: '' }],
  },
};

export default Amenity;
