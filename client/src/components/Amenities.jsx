import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/AmenitiesDisplay.css';

const Amenities = ({ hideAmenities, showModal }) => {
  let modal;

  if (showModal) {
    modal = (
      <div>
        DISPLAY
      </div>
    );
  } else {
    modal = (
      <div>
      
      </div> 
    );
  }

  return (
    modal
  );
};

export default Amenities;
