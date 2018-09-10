require('dotenv').config();
const { Description } = require('./database');

const addDescription = (listing) => {
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
    displayAmenities: listing.displayAmenities,
    amenity: listing.amenity,
  }).save()
    .catch((err) => {
      throw err;
    });
};

const getListing = (id, cb) => {
  Description.find({ id }, (err, docs) => {
    if (err) {
      throw err;
    }
    cb(docs[0]);
  });
};

module.exports = { addDescription, getListing };
