import React from 'react';
import axios from 'axios';

import { getRandomInt } from '../../../seedDatabase/helpers';

import HomeHighlights from './HomeHighlights.jsx';
import HeaderContainer from './HeaderContainer.jsx';
import AmenitiesDisplay from './AmenitiesDisplay.jsx';
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
        amenities: {},
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
      guests,
      bedrooms,
      beds,
      baths,
      description,
      homehighlights,
      displayAmenities,
      amenities,
    } = details;

    return (
      <div className={styles.container}>
        <HeaderContainer
          guests={guests}
          bedrooms={bedrooms}
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
        <AmenitiesDisplay
          displayAmenities={displayAmenities}
        />
      </div>
    );
  }
}

export default App;
