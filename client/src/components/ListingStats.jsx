import React from 'react';
import PropTypes from 'prop-types';

const ListingStats = ({
  guests, bedrooms, beds, baths,
}) => (
  <div>
    <div>{guests} guests {bedrooms} bedrooms {beds} beds {baths} baths</div>
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
