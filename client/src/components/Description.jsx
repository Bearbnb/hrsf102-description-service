import React from 'react';
import PropTypes from 'prop-types';

import DescriptionExtended from './DescriptionExtended.jsx';

import styles from '../../../styles/Description.css';

const Description = ({ 
  description,
  descriptionExtended,
  showDescription,
  showDescriptionExtended,
  hideDescription,
}) => {
  let expandDescriptionButton;

  if (showDescriptionExtended) {
    expandDescriptionButton = (
      <div />
    );
  } else {
    expandDescriptionButton = (
      <button
        className={styles.button}
        type="button"
        onClick={() => showDescription()}
      >Read more about the space
      </button>
    );
  }

  return (
    <div className={styles.container}>

      <p>
        {description}
      </p>

      <DescriptionExtended
        hideDescription={hideDescription}
        descriptionExtended={descriptionExtended}
        showDescriptionExtended={showDescriptionExtended}
      />
      {expandDescriptionButton}
    </div>
  );
};

Description.propTypes = {
  description: PropTypes.string,
};

Description.defaultProps = {
  description: '',
};

export default Description;
