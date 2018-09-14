import React from 'react';
import axios from 'axios';

import { getRandomInt } from '../../../seedDatabase/helpers';

import HomeHighlights from './HomeHighlights.jsx';
import HeaderContainer from './HeaderContainer.jsx';
import AmenitiesDisplay from './AmenitiesDisplay.jsx';
import Description from './Description.jsx';
import styles from '../../../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {
        id: 0,
        name: '',
        ownerName: '',
        ownerPicture: '',
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
      showModal: false,
    };
    this.showAmenities = this.showAmenities.bind(this);
    this.hideAmenities = this.hideAmenities.bind(this);
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

  showAmenities() {
    this.setState({
      showModal: true,
    });
  }

  hideAmenities() {
    console.log(this);
    this.setState({
      showModal: false,
    });
  }

  render() {
    const { details } = this.state;
    const {
      name,
      ownerName,
      ownerPicture,
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
    const { showModal } = this.state;

    if (ownerName === '') {
      return <div />;
    }

    return (
      <div className={styles.container}>
        <HeaderContainer
          guests={guests}
          bedrooms={bedrooms}
          beds={beds}
          baths={baths}
          name={name}
          ownerName={ownerName}
          ownerPicture={ownerPicture}
          location={location}
          livingSpace={livingSpace}
        />
        <HomeHighlights
          homehighlights={homehighlights}
        />
        <Description
          description={description}
        />
        <AmenitiesDisplay
          displayAmenities={displayAmenities}
          amenities={amenities}
          showModal={showModal}
          showAmenities={this.showAmenities}
          hideAmenities={this.hideAmenities}
        />
      </div>
    );
  }
}

export default App;
