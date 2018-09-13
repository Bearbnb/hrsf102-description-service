const getRandomInt = (min, max) => {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin)) + min;
};

const generateProperties = (data, property, min) => {
  const range = getRandomInt(min, data.length);
  for (let i = 0; i < range; i += 1) {
    const randomBasics = getRandomInt(0, data.length);
    if (!property.includes(data[randomBasics])) {
      property.push(data[randomBasics]);
    }
  }
};

const descriptionIpsum = () => `Escape civilization to this incredible and peaceful getaway! 
Reconnect with nature and disconnect from technology on your own private deck surrounded 
by pristine and untouched nature just a short drive away from LA.`;

const countAmenities = (amenities) => {
  let count = 0;
  const keys = Object.keys(amenities);
  for (let i = 0; i < keys.length; i += 1) {
    if (Array.isArray(amenities[keys[i]])) {
      count += amenities[keys[i]].length;
    }
  }
  return count;
};

const generateAmenitiesArray = (amenities) => {
  const amenitiesArray = [];
  const keys = Object.keys(amenities);
  if (keys.length > 0) {
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i] !== 'notIncluded' && keys[i] !== 'id' && keys[i] !== '_id') {
        amenitiesArray.push({
          amenity: keys[i],
          amenities: amenities[keys[i]],
        });
      }
    }

    amenitiesArray.push({
      amenity: 'notIncluded',
      amenities: amenities.notIncluded,
    });
  }

  return amenitiesArray;
};

module.exports = {
  getRandomInt,
  generateProperties,
  descriptionIpsum,
  countAmenities,
  generateAmenitiesArray,
};
