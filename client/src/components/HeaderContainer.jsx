import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import ListingStats from './ListingStats.jsx';

const HeaderContainer = ({
  guests, bedrooms, beds, baths, name, ownerName, location, livingSpace,
}) => (
  <div>
    <Header
      livingSpace={livingSpace}
      name={name}
      location={location}
    />
    <ListingStats
      guests={guests}
      bedrooms={bedrooms}
      beds={beds}
      baths={baths}
    />
  </div>
);

HeaderContainer.propTypes = {
  guests: PropTypes.number,
  bedrooms: PropTypes.number,
  beds: PropTypes.number,
  baths: PropTypes.number,
  ownerName: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  livingSpace: PropTypes.string,

};

HeaderContainer.defaultProps = {
  guests: 0,
  bedrooms: 0,
  beds: 0,
  baths: 0,
  ownerName: 'Charlie P',
  name: 'Cozy thing',
  location: 'San Francisco',
  livingSpace: 'Apartment',
};

export default HeaderContainer;
