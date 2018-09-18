import React from 'react';
import PropTypes from 'prop-types';

import Thumbs from './Thumbs.jsx';
import Highlight from './Highlight.jsx';

import styles from '../../../styles/HomeHighlight.css';

class HomeHighlight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showThumbs: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showThumbs: false,
    });
  }

  render() {
    const { highlight } = this.props;
    const { showThumbs } = this.state;
    let buttonOrFeedback;

    if (showThumbs) {
      buttonOrFeedback = (
        <Thumbs handleClick={this.handleClick} />
      );
    } else {
      buttonOrFeedback = (
        <div className={styles.helpful}>
          Thanks for your feedback.
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <Highlight highlight={highlight} />
        {buttonOrFeedback}
      </div>
    );
  }
}

HomeHighlight.propTypes = {
  highlight: PropTypes.objectOf(PropTypes.string),
};

HomeHighlight.defaultProps = {
  highlight: {
    highlight: 'Self Check-in',
    details: 'Easily check yourself in with the lockbox.',
  },
};

export default HomeHighlight;
