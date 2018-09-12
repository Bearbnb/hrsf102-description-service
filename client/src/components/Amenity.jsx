import React from 'react';
import PropTypes from 'prop-types';

const Amenity = ({ amenity }) => {
  console.log(amenity);
  return (
    <div>
      Amenity
    </div>
  );
};

Amenity.propTypes = {
  amenity: PropTypes.shape({
    name: PropTypes.string,
    details: PropTypes.string,
  }),
};

Amenity.defaultProps = {
  amenity: {},
};

export default Amenity;
