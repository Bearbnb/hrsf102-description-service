import React from 'react';
import PropTypes from 'prop-types';

const Amenities = ({ hideAmenities, showModal}) => {
  console.log(showModal, 'showModal in Amenities');
  const showHideClassName = showModal ? 'modal display-block' : 'modal display-none';
  console.log(showHideClassName);

  return (
    <div className={showHideClassName}>
      <section>
        <button type="button" onClick={() => hideAmenities()}>
          Close Modal
        </button>
      </section>
    </div>
  );
};

export default Amenities;
