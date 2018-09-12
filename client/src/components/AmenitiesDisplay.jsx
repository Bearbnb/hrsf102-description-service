import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles/AmenitiesDisplay.css';
import { countAmenities } from '../../../seedDatabase/helpers';

const AmenitiesDisplay = ({ displayAmenities, amenities }) => {
  const column1 = displayAmenities.slice(0, 3);
  const column2 = displayAmenities.slice(3, 6);

  const amenitiesCount = countAmenities(amenities);

  return (
    <div className={styles.container}>
      <hr className={styles.pageBreak} />
      <div className={styles.title}>
        Amenities
      </div>
      <div className={styles.columns}>

        <div>
          {column1.map((amenity) => {
            return (<div className={styles.amenity}>{amenity}</div>);
          })}
        </div>

        <div className={styles.rightColumn}>
          {column2.map((amenity) => {
            return (<div className={styles.amenity}>{amenity}</div>);
          })}
        </div>

      </div>

      <button
        className={styles.button}
        type="button"
      >Show all {amenitiesCount} amenities
      </button>
    </div>
  );
};

AmenitiesDisplay.propTypes = {
  displayAmenities: PropTypes.arrayOf(PropTypes.string),
};

AmenitiesDisplay.defaultProps = {
  displayAmenities: [],
};

export default AmenitiesDisplay;
