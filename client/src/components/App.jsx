import React from 'react';
import axios from 'axios';

import { getRandomInt } from '../../../seedDatabase/helpers';
import Header from './Header.jsx';
import HomeHighlights from './HomeHighlights.jsx';
import styles from '../../../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {
        id: 0,
        name: '',
        ownerName: '',
        location: '',
        livingSpace: '',
        guests: 0,
        bedrooms: 0,
        beds: 0,
        baths: 0,
        description: '',
        homehighlights: [],
        displayAmenities: [],
        amenity: {},
      },
    };
  }

  componentWillMount() {
    const listing = getRandomInt(1, 101);
    axios.get('/listings', {
      params: {
        id: listing,
      },
    }).then((res) => {
      this.setState({
        details: res.data,
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { details } = this.state;
    const {
      name,
      ownerName,
      location,
      livingSpace,
      beds,
      baths,
      description,
      homehighlights,
      displayAmenities,
      amenity,
    } = details;

    return (
      <div className={styles.container}>
        Airbnb Listing
        <Header
          beds={beds}
          baths={baths}
          name={name}
          ownerName={ownerName}
          location={location}
          livingSpace={livingSpace}
        />
        <HomeHighlights
          homehighlights={homehighlights}
        />
      </div>
    );
  }
}

export default App;
