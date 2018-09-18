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

DescriptionExtended.propTypes = {
  descriptionExtended: PropTypes.objectOf(PropTypes.string),
  hideDescription: PropTypes.func,
  showDescriptionExtended: PropTypes.bool,
};

DescriptionExtended.defaultProps = {
  descriptionExtended: {
    'THE SPACE': 'IT\'S LARGE',
    'VERY IMPORTANT:': 'DON\'T TOUCH THINGS',
    'GUEST ACCESS': 'USE THE DOOR',
  },
  hideDescription: () => {},
  showDescriptionExtended: false,
};

export default DescriptionExtended;
