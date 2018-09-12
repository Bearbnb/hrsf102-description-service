const faker = require('faker');

const { addDescription } = require('../database/model.js');
const { getRandomInt, generateProperties, hipsterIpsum } = require('./helpers.js');
const {
  basics,
  dining,
  guestAccess,
  bedAndBath,
  safetyFeatures,
  notIncluded,
} = require('./amenitiesSeedData.js');

const {
  adjectives,
  places,
  additions,
  homeHighlights,
  displayAmenities,
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

    generateProperties(basics, amenity.basics, 3);
    generateProperties(dining, amenity.dining);
    generateProperties(guestAccess, amenity.guestAccess, 3);
    generateProperties(bedAndBath, amenity.bedAndBath, 3);
    generateProperties(safetyFeatures, amenity.safetyFeatures, 3);
    generateProperties(notIncluded, amenity.notIncluded, 3);
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
    description.guests = getRandomInt(4, 10);
    description.bedrooms = getRandomInt(2, 6);
    description.beds = getRandomInt(2, 9);
    description.baths = getRandomInt(2, 4);
    description.description = hipsterIpsum();
    description.homehighlights = [];
    description.displayAmenities = displayAmenities;

    generateProperties(homeHighlights, description.homehighlights, 3);

    descriptions.push(description);
  }

  return descriptions;
};
generateDescriptions();

const seedDatabase = () => {
  const amenities = generateAmenities();
  const descriptions = generateDescriptions();

  const listings = descriptions.map((description, i) => {
    description.amenities = amenities[i];
    return description;
  });

  listings.forEach((listing) => {
    addDescription(listing);
  });
};

seedDatabase();
