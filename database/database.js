require('dotenv').config();

const mongoose = require('mongoose');

console.log();

mongoose.connect(process.env.URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('mongoose is connected');
});

const descriptionsSchema = new mongoose.Schema({
  id: Number,
  name: String,
  ownerName: String,
  location: String,
  livingSpace: String,
  beds: Number,
  baths: Number,
  description: String,
  homehighlights: {},
});

const amenitiesSchema = new mongoose.Schema({
  id: Number,
  basics: [{}],
  dining: [{}],
  guestAccess: [{}],
  bedAndBath: [{}],
  safetyFeatures: [{}],
  notIncluded: [String],
});

const Description = mongoose.model('descriptions', descriptionsSchema);
const Amenity = mongoose.model('amenities', amenitiesSchema);

module.exports = { Description, Amenity };
