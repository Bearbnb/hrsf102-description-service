import React from 'react';
import PropTypes from 'prop-types';

import HomeHighlight from './HomeHighlight.jsx';
import styles from '../../../styles/HomeHighlights.css';

const HomeHighlights = ({ homehighlights }) => (
  <div className={styles.container}>
    <div className={styles.title}>HOME HIGHLIGHTS</div>
    {homehighlights.map((highlight, i) => <HomeHighlight key={i} highlight={highlight} />)}
  </div>
);

HomeHighlights.propTypes = {
  homehighlights: PropTypes.arrayOf(PropTypes.object),
};

HomeHighlights.defaultProps = {
  homehighlights: [],
};
export default HomeHighlights;
