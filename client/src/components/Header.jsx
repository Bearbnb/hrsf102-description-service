import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/Header.css';

const Header = ({
  name, location, livingSpace,
}) => (
  <div className={styles.container}>
    <div>
      <span className={styles.livingSpace}>ENTIRE {livingSpace.toUpperCase()}</span>
    </div>
    <div className={styles.name}>
      {name}
    </div>
    <div className={styles.location}>
      {location}
    </div>
  </div>
);

Header.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  livingSpace: PropTypes.string,
};

Header.defaultProps = {
  name: 'Cozy thing',
  location: 'San Francisco',
  livingSpace: 'Apartment',
};

export default Header;
