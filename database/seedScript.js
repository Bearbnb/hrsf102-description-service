const faker = require('faker');

const { addDescription } = require('./model.js');
const {
  getRandomInt,
  basics,
  basicsRange,
  dining,
  diningRange,
  guestAccess,
  guestAccessRange,
  bedAndBath,
  bedAndBathRange,
  safetyFeatures,
  safetyFeaturesRange,
  notIncluded,
  notIncludedRange,
} = require('./amenitiesSeedData.js');

const seedDatabaseWithAmenities = () => {
  // const listings = [];
  for (let i = 1; i < 101; i += 1) {
    const listing = {};
    listing.id = i;
    listing.ownerName = `${faker.name.firstName} ${faker.name.lastName}`;




    const amenity = {};
    amenity.id = i;
    amenity.basics = [];
    amenity.dining = [];
    amenity.guestAccess = [];
    amenity.bedAndBath = [];
    amenity.safetyFeatures = [];
    amenity.notIncluded = [];

    for (let j = 0; j < basicsRange; j += 1) {
      const randomBasics = getRandomInt(0, basics.length);
      if (!amenity.basics.includes(basics[randomBasics])) {
        amenity.basics.push(basics[randomBasics]);
      }
    }

    for (let j = 0; j < diningRange; j += 1) {
      const randomDining = getRandomInt(0, dining.length);
      if (!amenity.dining.includes(dining[randomDining])) {
        amenity.dining.push(dining[randomDining]);
      }
    }

    for (let j = 0; j < guestAccessRange; j += 1) {
      const randomGuestAccess = getRandomInt(0, guestAccess.length);
      if (!amenity.guestAccess.includes(guestAccess[randomGuestAccess])) {
        amenity.guestAccess.push(guestAccess[randomGuestAccess]);
      }
    }

    for (let j = 0; j < bedAndBathRange; j += 1) {
      const randomBedBath = getRandomInt(0, bedAndBath.length);
      if (!amenity.bedAndBath.includes(bedAndBath[randomBedBath])) {
        amenity.bedAndBath.push(bedAndBath[randomBedBath]);
      }
    }

    for (let j = 0; j < safetyFeaturesRange; j += 1) {
      const randomSafeyFeatures = getRandomInt(0, safetyFeatures.length);
      if (!amenity.safetyFeatures.includes(safetyFeatures[randomSafeyFeatures])) {
        amenity.safetyFeatures.push(safetyFeatures[randomSafeyFeatures]);
      }
    }

    for (let j = 0; j < notIncludedRange; j += 1) {
      const randomNotIncluded = getRandomInt(0, notIncluded.length);
      if (!amenity.notIncluded.includes(notIncluded[randomNotIncluded])) {
        amenity.notIncluded.push(notIncluded[randomNotIncluded]);
      }
    }

    listing.amenity = amenity;
  }


  // listings.forEach((listing) => {
  //   addAmenity(listing);
  // });
};

seedDatabaseWithAmenities();
