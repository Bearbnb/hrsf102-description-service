import React from 'react';
import PropTypes from 'prop-types';

const DescriptionExtended = ({ descriptionExtended, hideDescription }) => {
  const bullets = Object.keys(descriptionExtended);
  return (
    <div>
      {bullets.map(bullet => (
        <div>
          <span>{bullet}</span>
          {descriptionExtended[bullet].map(paragraph => (
            <p>{paragraph}</p>
          ))}
        </div>
      ))}
      <button
        type="button"
        onClick={() => hideDescription()}
      >Hide
      </button>
    </div>
  );
};

export default DescriptionExtended;
