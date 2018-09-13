import React from 'react';
import PropTypes from 'prop-types';

const Owner = ({ ownerName, ownerPicture }) => (
  <div>
    <div>{ownerName}</div>
    <img src={ownerPicture} alt="" />
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
