const faker = require('faker');

const { addDescription } = require('./model.js');
const { getRandomInt, generateProperties } = require('./helpers');
const {
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

const {
  adjectives,
  places,
  additions,
  homeHighlights,
  homeHighlightsRange,
  // displayAmenities,
} = require('./descriptionsSeedData.js');

const generateListingName = () => `${adjectives[getRandomInt(0, adjectives.length)]} `
  + `${places[getRandomInt(0, places.length)]} `
  + `with ${additions[getRandomInt(0, additions.length)]}`;

const generateAmenities = () => {
  const amenities = [];
  for (let i = 1; i < 101; i += 1) {
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
    amenities.push(amenity);
  }

  return amenities;
};

const generateDescriptions = () => {
  const descriptions = [];
  for (let i = 1; i < 101; i += 1) {
    const description = {};

    description.id = i;
    description.name = generateListingName();
    description.ownerName = `${faker.name.firstName()} ${faker.name.lastName()}`;
    description.location = faker.address.city();
    description.livingSpace = places[getRandomInt(0, places.length)];
    description.beds = getRandomInt(1, 9);
    description.baths = getRandomInt(1, 4);
    description.description = faker.lorem.paragraph();
    description.homeHighlights = [];
    generateProperties(homeHighlights, description.homeHighlights);

    descriptions.push(description);
  }

  return descriptions;
};
generateDescriptions();

const seedDatabase = () => {
  const amenities = generateAmenities();
  const descriptions = generateDescriptions();

  const listings = descriptions.map((description, i) => {
    description.amenity = amenities[i];
    return description;
  });

  listings.forEach((listing) => {
    addDescription(listing);
  });
};

seedDatabase();
