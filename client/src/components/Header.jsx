import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/Header.css';

const Header = ({
  beds, baths, name, ownerName, location, livingSpace,
}) => (
  <div className={styles.container}>
    <div>
      <span className={styles.livingSpace}>ENTIRE {livingSpace.toUpperCase()}</span>
    </div>
    <div className={styles.name}>
      {name}
    </div>
    <div>
      {location}
    </div>
  </div>
);

Header.propTypes = {
  beds: PropTypes.number,
  baths: PropTypes.number,
  ownerName: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  livingSpace: PropTypes.string,
};

Header.defaultProps = {
  beds: 0,
  baths: 0,
  ownerName: 'Charlie P',
  name: 'Cozy thing',
  location: 'San Francisco',
  livingSpace: 'Apartment',
};

export default Header;
