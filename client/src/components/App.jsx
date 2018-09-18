import React from 'react';
import axios from 'axios';

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
        descriptionExtended: '',
        homehighlights: [],
        displayAmenities: [],
        amenities: {},
      },
      showModal: false,
      showDescriptionExtended: false,
    };
    this.showAmenities = this.showAmenities.bind(this);
    this.hideAmenities = this.hideAmenities.bind(this);
    this.hideAmenitiesPress = this.hideAmenities.bind(this);
    this.showDescription = this.showDescription.bind(this);
    this.hideDescription = this.hideDescription.bind(this);
  }

  componentWillMount() {
    const idPath = window.location.pathname;
    const id = idPath.substring(1, idPath.length - 1);

    axios.get(`/listings/${id}`)
      .then((res) => {
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
    this.setState({
      showModal: false,
    });
  }

  hideAmenitiesPress(e) {
    if (e.keyCode === 27) {
      this.setState({
        showModal: false,
      });
    }
  }

  showDescription() {
    this.setState({
      showDescriptionExtended: true,
    });
  }

  hideDescription() {
    this.setState({
      showDescriptionExtended: false,
    });
  }

  render() {
    const { details } = this.state;
    const { showDescriptionExtended } = this.state;
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
      descriptionExtended,
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
          descriptionExtended={descriptionExtended}
          showDescription={this.showDescription}
          hideDescription={this.hideDescription}
          showDescriptionExtended={showDescriptionExtended}
        />

        <AmenitiesDisplay
          displayAmenities={displayAmenities}
          amenities={amenities}
          showModal={showModal}
          showAmenities={this.showAmenities}
          hideAmenities={this.hideAmenities}
          hideAmenitiesPress={this.hideAmenitiesPress}
        />
      </div>
    );
  }
}

export default App;
