const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();

// node --max-old-space-size=8192 seed.js

const stockStatus = ['in stock', 'sold out', 'Backordered'];

const randomVariationItems = () => {
  const randVariationItems = Math.ceil(Math.random() * 10);
  const items = [];
  for (let i = 0; i < randVariationItems; i += 1) {
    const randomImage = Math.ceil(Math.random() * 1000);
    items.push({
      name: faker.commerce.productName(),
      price: faker.random.number(5000),
      image: `https://picsum.photos/id/${randomImage}/300/300`,
    });
  }
  return items;
};

const randomVariations = () => {
  // const randVariations = Math.ceil(Math.random() * 2);
  const variations = [];
  for (let i = 0; i < 1; i += 1) {
    variations.push({
      variationType: faker.random.word(),
      variationItems: randomVariationItems(),
    });
  }
  return variations;
};

const randomProtection = () => {
  const protections = [];
  const rand = Math.floor(Math.random() * 2 + 1);
  for (let i = 0; i < rand; i += 1) {
    protections.push({
      name: `${faker.company.companyName()} Plan`,
      price: faker.random.number(5000),
    });
  }
  return protections;
};

const randomOffers = () => {
  const rand = Math.floor(Math.random() * 3);
  const offers = [];
  for (let i = 0; i < rand; i += 1) {
    offers.push({
      offerType: faker.lorem.word(),
      offers: [{ title: faker.lorem.word() }],
    });
  }
  return offers;
};

const dataGenPlans = () => {
  writer.pipe(fs.createWriteStream('products5.csv'));
  for (let i = 8000001; i <= 10000000; i += 1) {
    writer.write({
      _id: i,
      brand: faker.company.companyName(),
      name: faker.commerce.productName(),
      model: faker.random.alphaNumeric(8),
      color: faker.commerce.color(),
      sku: faker.random.number(1000000),
      price: faker.random.number(5000),
      instock: faker.random.arrayElement(stockStatus),
      variations: JSON.stringify(randomVariations()),
      offers: JSON.stringify(randomOffers()),
      protectionPlans: JSON.stringify(randomProtection()),
      mightAlsoNeed: JSON.stringify({
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
      }),
    });
    console.log('we are here: ', i);
  }
  writer.end();
  console.log('complete');
};

dataGenPlans();
