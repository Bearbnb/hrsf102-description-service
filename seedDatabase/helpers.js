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

const descriptionExtendedIpsum = () => `THE SPACE
This is the personal Airstream of a nature-loving Malibu designer who built it as his personal getaway from his busy hectic schedule. Stripped down to its bare aluminum studs, the airstream has been redesigned into a large studio with three large frameless glass panels that slide open to a huge cantilevered deck with unrivaled views of the pristine Santa Monica mountains rolling down to the Pacific ocean below.

Lounge in our luxury extra thick wool rugs and cotton poufs, drive down to surf one of Malibu's best breaks or go hike Sandstone Peak (Santa Monica's highest mountain). But whatever you do, make sure not to miss the incredible sunsets off our deck. At night, watch the milky way appear and count the constellations above or the moon reflect on the ocean below. And if the wind is right, listen to the sounds of the crashing waves travel up the canyon or even the seals barking down below.

And then at dawn, if you're lucky with the morning fog, wake up above the clouds like you are the only person in this planet.

VERY IMPORTANT:

DO NOT CLICK ON THE AIRBNB LINK FOR DIRECTIONS as it might take you to the wrong location. Only use the accurate directions provided on our itinerary. If you don't you might get lost and we are not responsible if you do not follow our easy and foolproof directions.

PLEASE DO NOT BOOK THIS LISTING if you are afraid of nature or its creatures. Understand you are surrounded by thousands of completely untouched nature. You are very likely to hear (or see) coyotes, owls, seals, roadrunners and bunnies. There is a bobcat in the area but these are usually very skittish. There are a mice in the Santa Monica mountains. About once a month, a guest will complain that they saw a mouse. Said mouse might come into the airstream if food is left outside the fridge. We do not offer refunds if a mouse comes into the airstream but we do have 4 traps around the airstream so the odds are heavily stacked against the mice.

In three years we have yet to ever see a rattle snake near the airstream so the area is definitely not prone to them.

This listing is weather dependent. If there is a high chance of rain scheduled during your stay we reserve the right to cancel the reservation due to potential slippery road conditions and the fact that we have to store all the expensive furniture inside the airstream.

The beauty of this experience lies in seeing infinite views and yet no trace of humankind. Sleeping with the doors open, under the milky-way while hearing the ocean waves crashing below and the occasional seal barking in the distance or coyote howling for its pack. Our guests have the most special nights here. 
Reconnect with nature and disconnect from technology :-)

Guest access

There's a queen sized bed and another pull out sofa that can fit another person - bring your own sleeping bag for the 3rd wheel. Kitchenette, fridge and separate bathroom with complete privacy and stunning views.

Interaction with guests

There is a house 400 yards below the airstream where a lovely family with kids live. If you peak over the edge of the deck you might see the kids playing outside. Frank and Heidi the parents are super friendly and can help you with serious issues once you are there.

Other things to note

There is no reception at the airstream. 1/2 mile down below, where the paved road end (upper camp area) there is perfect reception in case you need to make a call.

This off the grid airstream means there is no AC power for electrical devices. The 12V DC system powers the LED lights and stereo / speakers. You can charge your iphone off the stereo but bring your own cable as guests take ours often :(

We provide a solar battery that charges outside on the deck and does indeed have AC power. Usually it will have a decent charge, but if the prior guests drain it with electronics, then it will take a while to re-charge.

There are two routes up to the airstream. The short one (not paved, you'll need an SUV) takes 7 minutes to the beach, the longer one (paved and gentle dirt road, all non lowered cars make it ok as long as you are a decent driver and know how to navigate ruts) takes about 11 minutes but is very scenic and beautiful.

If you are fearful of dirt roads, care immensely about your sports car, or are afraid of cliffs, skip this booking. For all other adventurers, I make it up with my prius without bottoming out no problem so don't fear.`;

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
  descriptionExtendedIpsum,
  countAmenities,
  generateAmenitiesArray,
};
