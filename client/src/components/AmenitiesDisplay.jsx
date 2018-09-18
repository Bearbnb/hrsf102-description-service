import React from 'react';
import PropTypes from 'prop-types';

import Amenities from './Amenities.jsx';
import styles from '../../../styles/AmenitiesDisplay.css';
import { countAmenities } from '../../../seedDatabase/helpers';

const AmenitiesDisplay = ({
  displayAmenities,
  amenities,
  showModal,
  showAmenities,
  hideAmenities,
  hideAmenitiesPress,
}) => {
  const column1 = displayAmenities.slice(0, 3);
  const column2 = displayAmenities.slice(3, 6);

  const iconMap = {
    Gym: 'https://s3.amazonaws.com/airbnb-icons/gym.png',
    Kitchen: 'https://s3.amazonaws.com/airbnb-icons/kitcher.png',
    Wifi: 'https://s3.amazonaws.com/airbnb-icons/wifi.png',
    'Laptop friendly workspace': 'https://s3.amazonaws.com/airbnb-icons/laptop.png',
    Hangers: 'https://s3.amazonaws.com/airbnb-icons/hanger.png',
    Iron: 'https://s3.amazonaws.com/airbnb-icons/iron.png',
  };

  const amenitiesCount = countAmenities(amenities);

  return (
    <div className={styles.container}>

      <hr className={styles.pageBreak} />

      <div className={styles.title}>
        Amenities
      </div>

      <div className={styles.columns}>

        <div>
          {column1.map((amenity, i) => (
            <div className={`${styles.displayAmenity} ${styles.amenity}`}>
              <div>
                <img
                  alt=""
                  src={iconMap[amenity]}
                />
              </div>

              <div
                key={amenity.id}
                className={styles.amenity}
              >{amenity}
              </div>

            </div>
          ))}
        </div>

        <div className={styles.rightColumn}>
          {column2.map(amenity => (
            <div className={styles.displayAmenity}>
              <img alt="" src={iconMap[amenity]} />
              <div
                key={amenity.id}
                className={styles.amenity}
              >{amenity}
              </div>
            </div>
          ))}
        </div>

      </div>

      <button
        className={styles.button}
        type="button"
        onClick={() => showAmenities()}
      >Show all {amenitiesCount} amenities
      </button>

      <Amenities
        amenities={amenities}
        hideAmenities={hideAmenities}
        hideAmenitiesPress={hideAmenitiesPress}
        showModal={showModal}
      />

    </div>
  );
};

AmenitiesDisplay.propTypes = {
  displayAmenities: PropTypes.arrayOf(PropTypes.string),
  showModal: PropTypes.bool,
  showAmenities: PropTypes.func,
  hideAmenities: PropTypes.func,
  hideAmenitiesPress: PropTypes.func,
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
};

AmenitiesDisplay.defaultProps = {
  displayAmenities: [],
  showModal: false,
  showAmenities: () => {},
  hideAmenities: () => {},
  hideAmenitiesPress: () => {},
  amenities: {},
};

export default AmenitiesDisplay;
