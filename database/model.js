require('dotenv').config();
const { Description } = require('./database');

const addDescription = (listing) => {
  new Description({
    id: listing.id,
    name: listing.name,
    ownerName: listing.ownerName,
    location: listing.location,
    livingSpace: listing.livingSpace,
    beds: listing.beds,
    baths: listing.baths,
    description: listing.description,
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
