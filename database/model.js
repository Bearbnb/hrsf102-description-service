require('dotenv').config();
const { Description } = require('./database');
// const { Amenity } = require('./database');

const addDescription = (listing) => {
  console.log(listing.amenity);
  new Description({
    id: listing.id,
    name: listing.name,
    ownerName: listing.ownerName,
    location: listing.location, // city
    livingSpace: listing.livingSpace, // string
    beds: listing.beds, // int
    baths: listing.baths, // int
    description: listing.description, // string
    homehighlights: listing.homeHighlights,
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
