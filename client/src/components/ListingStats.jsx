import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles/ListingStats.css';

const ListingStats = ({
  guests, bedrooms, beds, baths,
}) => (
  <div className={styles.container}>
    <div className={styles.stat}>{guests} guests</div>
    <div className={styles.stat}>{bedrooms} bedrooms</div>
    <div className={styles.stat}>{beds} beds</div>
    <div className={styles.stat}>{baths} baths</div>
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
