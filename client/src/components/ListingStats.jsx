import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles/ListingStats.css';

const ListingStats = ({
  guests, bedrooms, beds, baths,
}) => (
  <div className={styles.container}>

    <div className={styles.statOne}>
      <img alt="" src="https://s3-us-west-1.amazonaws.com/airbnb-owner-photos/guests.png" />
      <div>{guests} guests</div>
    </div>

    <div className={styles.statTwo}>
      <img alt="" src="https://s3-us-west-1.amazonaws.com/airbnb-owner-photos/living.png" />
      <div>{bedrooms} bedrooms</div>
    </div>

    <div className={styles.statThree}>
      <img 
        className={styles.img3}
        alt=""
        src="https://s3-us-west-1.amazonaws.com/airbnb-owner-photos/beds.png" />
      <div>{beds} beds</div>
    </div>

    <div className={styles.statFour}>
      <img 
        alt=""
        src="https://s3-us-west-1.amazonaws.com/airbnb-owner-photos/bath.png" />
      <div>{baths} baths</div>
    </div>
  </div>
);

ListingStats.propTypes = {
  guests: PropTypes.number,
  bedrooms: PropTypes.number,
  beds: PropTypes.number,
  baths: PropTypes.number,
};

ListingStats.defaultProps = {
  guests: 0,
  bedrooms: 0,
  beds: 0,
  baths: 0,
};

export default ListingStats;
