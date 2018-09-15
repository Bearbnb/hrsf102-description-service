import React from 'react';
import PropTypes from 'prop-types';

const DescriptionExtended = ({ descriptionExtended }) => {
  const bullets = Object.keys(descriptionExtended);
  return (
    <div>
      {bullets.map(bullet => (
        <div>
          <span>{bullet}</span>
          <p>{descriptionExtended[bullet]}</p>
        </div>
      ))}
    </div>
  );
};

DescriptionExtended.propTypes = {
  descriptionExtended: PropTypes.string,
};

DescriptionExtended.defaultProps = {
  descriptionExtended: '',
};

export default DescriptionExtended;
