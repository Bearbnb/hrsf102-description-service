const faker = require('faker');

const { addDescription } = require('./model.js');
const { getRandomInt, generateProperties } = require('./helpers');
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

    generateProperties(basics, amenity.basics);
    generateProperties(dining, amenity.dining);
    generateProperties(guestAccess, amenity.guestAccess);
    generateProperties(bedAndBath, amenity.bedAndBath);
    generateProperties(safetyFeatures, amenity.safetyFeatures);
    generateProperties(notIncluded, amenity.notIncluded);
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
