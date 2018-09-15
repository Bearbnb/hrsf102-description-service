import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles/DescriptionExtended.css';

const DescriptionExtended = ({ descriptionExtended, hideDescription }) => {
  const bullets = Object.keys(descriptionExtended);
  return (
    <div className={styles.container}>
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
