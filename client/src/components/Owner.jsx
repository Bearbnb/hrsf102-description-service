import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles/Owner.css';

const Owner = ({ ownerName, ownerPicture }) => (
  <div className={styles.container}>
    <img
      className={styles.imgCircle}
      src={ownerPicture}
      alt=""
    />
    <div className={styles.name}>{ownerName.split(' ')[0]}</div>
  </div>
);

Owner.propTypes = {
  ownerName: PropTypes.string,
  ownerPicture: PropTypes.string,
};

Owner.defaultProps = {
  ownerName: 'John Smith',
  ownerPicture: 'https://s3-us-west-1.amazonaws.com/airbnb-owner-photos/airbnb1.jpg',
};

export default Owner;
