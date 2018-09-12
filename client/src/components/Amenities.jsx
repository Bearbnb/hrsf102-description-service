import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/Amenities.css';

const Amenities = ({ hideAmenities, showModal }) => {
  const display = showModal ? styles.displayBlock : styles.displayNone;

  return (
    <div className={`${display} ${styles.modal}`}>
      <section className={styles.modalMain}>
        <button type="button" onClick={() => hideAmenities()}>close</button>
      </section>
    </div>
  );
};

// let modal;

// if (showModal) {
//   modal = (
//     <div className={styles.modalOverlayDiv}>
//       DISPLAY
//       <button
//         type="button"
//         onClick={() => hideAmenities()}
//       >
//       Close
//       </button>
//     </div>
//   );
// } else {
//   modal = (
//     <div />
//   );
// }

// return (
//   modal
// );

export default Amenities;
