import React from 'react';
import PropTypes from 'prop-types';

const DescriptionExtended = ({ descriptionExtended }) => (
  <div>
    hi
  </div>
);

DescriptionExtended.propTypes = {
  descriptionExtended: PropTypes.string,
};

DescriptionExtended.defaultProps = {
  descriptionExtended: '',
};

export default DescriptionExtended;
