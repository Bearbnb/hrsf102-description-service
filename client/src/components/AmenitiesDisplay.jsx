import React from 'react';
import PropTypes from 'prop-types';

const AmenitiesDisplay = ({ displayAmenities }) => {
  console.log(displayAmenities);
  return (
    <div>
    <br></br>
      {displayAmenities.map((amenity) => {
        return (<div>{amenity}</div>);
      })}
    </div>
  );
};

AmenitiesDisplay.propTypes = {
  displayAmenities: PropTypes.arrayOf(PropTypes.string)
};

AmenitiesDisplay.defaultProps = {
  displayAmenities: [],
};

export default AmenitiesDisplay;
