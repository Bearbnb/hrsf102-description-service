require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('mongoose is connected');
});

const homehighlightsSchema = new mongoose.Schema({
  cleanliness: String,
  experience: String,
  checkin: String,
  hospitality: String,
  value: String,
  superhost: Boolean,
});

const descriptionsSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  location: String,
  livingSpace: String,
  beds: Number,
  bath: Number,
  description: String,
  homehighlights: homehighlightsSchema,
});

const amenitySchema = new mongoose.Schema({
  name: String,
  details: String,
});

const amenitiesSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  basics: [amenitySchema],
  dining: [amenitySchema],
  guestAccess: [amenitySchema],
  bedAndBath: [amenitySchema],
  safetyFeatures: [amenitySchema],
  notIncluded: [String],
});

const description = mongoose.model('description', descriptionsSchema);
const amenities = mongoose.model('amenities', amenitiesSchema);

module.exports = { description, amenities };
