const getRandomInt = (min, max) => {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin)) + min;
};

const generateProperties = (data, property) => {
  const range = getRandomInt(3, data.length);
  for (let i = 0; i < range; i += 1) {
    const randomBasics = getRandomInt(0, data.length);
    if (!property.includes(data[randomBasics])) {
      property.push(data[randomBasics]);
    }
  }
};

module.exports = { getRandomInt, generateProperties };
