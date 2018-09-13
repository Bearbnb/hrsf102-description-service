import React from 'react';
import PropTypes from 'prop-types';

const Amenity = ({ availableAmenity }) => {
  return (
    <div>
      <h3>{availableAmenity.amenity}</h3>
      <hr />
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
