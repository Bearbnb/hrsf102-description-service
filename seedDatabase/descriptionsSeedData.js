const { getRandomInt } = require('./helpers.js');

const adjectives = [
  'Charming',
  'Quiet',
  'Tiny',
  'Stunning',
  'Awe-inspring',
  'Modern',
  'Urban',
  'Bright',
  'Beautiful',
];

const places = [
  'Home',
  'Penthouse',
  'Garden',
  'Condo',
  'Apartment',
  'Studio',
  'Townhouse',
];

const additions = [
  'Pool',
  'View',
  'Balcony',
  'Courtyard',
  'Common Space',
  'Nightlife Scene',
  'Night Market Nearby',
  'Dog Park',
];

const homeHighlights = [
  {
    highlight: 'Self Check-in',
    details: 'Easily check yourself in with the lockbox.',
  },
  {
    highlight: 'Great check-in experience',
    details: ' 100% of recent guests gave this home’s check-in process a 5-star rating.',
  },
  {
    highlight: 'Great location',
    details: '95% of recent guests gave this home’s location a 5-star rating.',
  },
  {
    highlight: 'Superhost',
    details: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
  },
  {
    highlight: 'Outstanding hospitality',
    details: '98% of recent guests said this host offered outstanding hospitality.',
  },
  {
    highlight: 'Sparkling clean',
    details: '94% of recent guests have said that this home was sparkling clean.',
  },
  {
    highlight: 'Quick responses',
    details: '98% of recent guests said this host responded quickly.',
  },
  {
    highlight: 'Great value',
    details: '100% of recent guests gave this home’s value a 5-star rating.',
  },
];
const homeHighlightsRange = getRandomInt(3, homeHighlights.length);

const displayAmenities = [
  'Gym',
  'Kitchen',
  'Wifi',
  'Laptop friendly workspace',
  'Hangers',
  'Iron',
  'TV',
  'Hot tub',
  'Indoor Fireplace',
  'Free Parking',
];

module.exports = {
  adjectives,
  places,
  additions,
  homeHighlights,
  homeHighlightsRange,
  displayAmenities,
};
