require('dotenv').config();
const { Description } = require('./database');
const { Amenity } = require('./database');

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
    homehighlights: {
      cleanliness: listing.homehighlights.cleanliness,
      experience: listing.homehighlights.experience,
      checkin: listing.homehighlights.checkin,
      hospitality: listing.homehighlights.hospitality,
      value: listing.homehighlights.value,
      superhost: listing.homehighlights.superhost,
    },
  }).save()
    .then(() => {
      console.log('description saved');
    })
    .catch((err) => {
      console.log(err);
    });
};

const addAmenity = (listing) => {
  new Amenity({
    id: listing.id,
    basics: listing.basics,
    dining: listing.dining,
    guestAccess: listing.guestAccess,
    bedAndBath: listing.bedAndBath,
    safetyFeatures: listing.safetyFeatures,
    notIncluded: listing.notIncluded,
  }).save()
    .then(() => {
      console.log('amenity saved');
    });
};

module.exports = { addDescription, addAmenity };
