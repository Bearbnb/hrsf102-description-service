import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import ListingStats from './ListingStats.jsx';
import Owner from './Owner.jsx';

const HeaderContainer = ({
  guests, bedrooms, beds, baths, name, ownerName, ownerPicture, location, livingSpace,
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

    <Owner
      ownerName={ownerName}
      ownerPicture={ownerPicture}
    />

  </div>
);

HeaderContainer.propTypes = {
  guests: PropTypes.number,
  bedrooms: PropTypes.number,
  beds: PropTypes.number,
  baths: PropTypes.number,
  ownerName: PropTypes.string,
  ownerPicture: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  livingSpace: PropTypes.string,

};

HeaderContainer.defaultProps = {
  guests: 0,
  bedrooms: 0,
  beds: 0,
  baths: 0,
  ownerName: 'John Smith',
  ownerPicture: 'https://s3-us-west-1.amazonaws.com/airbnb-owner-photos/airbnb1.jpg',
  name: 'Cozy thing',
  location: 'San Francisco',
  livingSpace: 'Apartment',
};

export default HeaderContainer;
