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

const hipsterIpsum = () => `Live-edge 90's messenger bag twee cardigan bicycle rights. Artisan gastropub YOLO, shabby chic forage post-ironic food truck craft beer stumptown man braid hell of taiyaki kombucha. Palo santo flannel tote bag, pok pok listicle intelligentsia trust fund before they sold out williamsburg. +1 bushwick schlitz pabst viral wolf put a bird on it air plant sriracha cornhole. Messenger bag pour-over chia subway tile, ethical next level kogi gentrify vape occupy lo-fi adaptogen plaid flannel. Bespoke lo-fi selfies craft beer tumblr vexillologist. Chillwave disrupt heirloom tumblr brunch.

Cloud bread keytar cray tumblr green juice. Prism subway tile meditation four dollar toast DIY green juice activated charcoal craft beer pitchfork fashion axe bushwick photo booth. Deep v whatever fixie bicycle rights, fashion axe chillwave cornhole etsy direct trade williamsburg street art ugh art party iceland gluten-free. Art party taxidermy franzen, affogato fam pickled viral helvetica edison bulb. Readymade food truck chillwave, mumblecore four loko mlkshk cloud bread coloring book hot chicken polaroid disrupt occupy. Heirloom taxidermy helvetica, normcore YOLO street art mumblecore freegan. La croix 90's disrupt air plant etsy jean shorts pop-up williamsburg mlkshk bitters.`;

module.exports = { getRandomInt, generateProperties, hipsterIpsum };
