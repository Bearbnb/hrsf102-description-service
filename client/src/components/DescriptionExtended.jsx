import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles/DescriptionExtended.css';

const DescriptionExtended = ({
  descriptionExtended, 
  hideDescription, 
  showDescriptionExtended,
}) => {
  const bullets = Object.keys(descriptionExtended);

  const fade = showDescriptionExtended ? styles.fadeIn : styles.fadeOut;

  return (
    <div className={`${styles.container} ${fade}`}>
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
