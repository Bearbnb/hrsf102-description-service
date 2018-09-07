require('dotenv').config();
const { Description } = require('./database');
// const { Amenity } = require('./database');

const addDescription = (listing) => {
  new Description({
    id: listing.id, // int
    name: listing.name, // string
    ownerName: listing.ownerName, // string
    location: listing.location, // city
    livingSpace: listing.livingSpace, // string
    beds: listing.beds, // int
    baths: listing.baths, // int
    description: listing.description, // string
    homehighlights: {
      cleanliness: listing.homehighlights.cleanliness, // obj
      experience: listing.homehighlights.experience, // obj
      checkin: listing.homehighlights.checkin, // obj
      hospitality: listing.homehighlights.hospitality,
      value: listing.homehighlights.value,
      superhost: listing.homehighlights.superhost,
    },
    amenity: listing.amenity,
  }).save()
    .catch((err) => {
      throw err;
    });
};

// const addAmenity = (listing) => {
//   new Amenity({
//     id: listing.id,
//     basics: listing.basics,
//     dining: listing.dining,
//     guestAccess: listing.guestAccess,
//     bedAndBath: listing.bedAndBath,
//     safetyFeatures: listing.safetyFeatures,
//     notIncluded: listing.notIncluded,
//   }).save();
// };

module.exports = { addDescription };
