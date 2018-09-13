require('dotenv').config();
const { Description } = require('./database');

const addDescription = (listing) => {
  new Description({
    id: listing.id,
    name: listing.name,
    ownerName: listing.ownerName,
    ownerPicture: listing.ownerPicture,
    location: listing.location,
    livingSpace: listing.livingSpace,
    guests: listing.guests,
    bedrooms: listing.bedrooms,
    beds: listing.beds,
    baths: listing.baths,
    homehighlights: listing.homehighlights,
    description: listing.description,
    displayAmenities: listing.displayAmenities,
    amenities: listing.amenities,
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
