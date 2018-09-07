const getRandomInt = (min, max) => {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin)) + min;
};

const basics = [
  { name: 'Wifi', details: 'continuous access in the listing' },
  { name: 'Cable TV', details: '' },
  { name: 'Indoor fireplace', details: '' },
  {
    name: 'Laptop friendly workspace',
    details: 'A table or desk with space for a laptop and a chair that’s comfortable to work in',
  },
  { name: 'Washer', details: 'In the building, or free' },
  { name: 'Dryer', details: 'In the building, or free' },
  { name: 'Air Conditioning', details: '' },
  { name: 'Heating', details: '' },
  { name: 'Stove', details: '' },
];
const basicsRange = getRandomInt(3, basics.length);

const dining = [
  { name: 'Kitchen', details: 'Space where guests can cook their own meals' },
  { name: 'Coffee Maker', details: '' },
  { name: 'Cooking Basics', deatails: 'Pots and pans, oil, salt and pepper' },
  { name: 'Microwave', details: '' },
  { name: 'Refrigerator', details: '' },
  { name: 'Dishes and silverware', details: '' },
];
const diningRange = getRandomInt(3, dining.length);

const guestAccess = [
  { name: 'Host greets you', details: '' },
  { name: 'Keypad', details: 'Check yourself into the home with a door code' },
  { name: 'Private entrance', details: 'Separate street or building entrance' },
  { name: 'Building staff', details: 'Someone is available 24 hours a day to let guests in' },
  { name: 'Lockbox', details: '' },
];
const guestAccessRange = getRandomInt(3, guestAccess.length);

const bedAndBath = [
  { name: 'Hangers', details: '' },
  { name: 'Shampoo', details: '' },
  { name: 'Hair Dryer', details: '' },
  { name: 'Hair Dry', details: '' },
  { name: 'Bed Linens', details: '' },
  { name: 'Extra Pillows and Blankets', details: '' },
  {
    name: 'Lock on bedroom door',
    details: 'Private room can be locked for safety and privacy',
  }];
const bedAndBathRange = getRandomInt(3, bedAndBath.length);

const safetyFeatures = [
  { name: 'Fire extinguisher', details: '' },
  { name: 'Smoke detector', details: '' },
  { name: 'Carbon Monoxide Detector', details: '' },
  { name: 'Security guard', details: 'They\'re a cool person' },
  { name: '', details: '' }];
const safetyFeaturesRange = getRandomInt(3, safetyFeatures.length);

const notIncluded = ['Private entrance', 'Washer', 'Dryer', 'TV', 'Bathroom', 'Bedroom', 'Dogs'];
const notIncludedRange = getRandomInt(3, notIncluded.length);

module.exports = {
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
};
