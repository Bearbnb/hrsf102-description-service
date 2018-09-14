require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

const amenitiesSchema = new mongoose.Schema({
  id: Number,
  basics: [{}],
  dining: [{}],
  guestAccess: [{}],
  bedAndBath: [{}],
  safetyFeatures: [{}],
  notIncluded: [String],
});

const descriptionsSchema = new mongoose.Schema({
  id: Number,
  name: String,
  ownerName: String,
  ownerPicture: String,
  location: String,
  livingSpace: String,
  guests: Number,
  bedrooms: Number,
  beds: Number,
  baths: Number,
  homehighlights: [{}],
  description: String,
  descriptionExtended: String,
  displayAmenities: [String],
  amenities: amenitiesSchema,
});

const Description = mongoose.model('descriptions', descriptionsSchema);

module.exports = { Description };
