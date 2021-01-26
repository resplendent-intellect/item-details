const faker = require('faker');
const { Product } = require('../database/index');

const randomInStock = () => {
  const choices = ['in stock', 'sold out', 'Backordered'];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

const randomVariationItems = () => {
  const randVariationItems = Math.ceil(Math.random() * 5);
  const items = [];
  for (let i = 0; i < randVariationItems; i += 1) {
    items.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.imageUrl(),
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
  const randomName = () => {
    const choices = ['Coverage Plan', 'Apple Care'];
    return choices[Math.floor(Math.random() * 2)];
  };
  const protections = [];
  const rand = Math.floor(Math.random() * 2 + 1);
  for (let i = 0; i < rand; i += 1) {
    protections.push({
      name: randomName(),
      price: faker.commerce.price(),
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

const seed = () => {
  for (let i = 0; i < 100; i += 1) {
    const newProduct = new Product({
      brand: faker.company.companyName(),
      name: faker.commerce.productName(),
      model: faker.random.alphaNumeric(),
      color: faker.commerce.color(),
      sku: faker.random.number(),
      price: faker.commerce.price(),
      variations: randomVariations(),
      protectionPlans: randomProtection(),
      inStock: randomInStock(),
      offers: randomOffers(),
      mightAlsoNeed: {
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
      },
    });
    newProduct.save()
      .catch((err) => {
        throw err;
      });
  }
};

module.exports = {
  randomInStock,
  randomVariationItems,
  randomVariations,
  randomProtection,
  randomOffers,
  seed,
};
