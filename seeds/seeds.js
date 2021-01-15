const faker = require('faker');
const { Product } = require('../database/index');

const randomInStock = () => {
  const choices = ['in stock', 'sold out', 'backordered'];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

const randomVariations = () => {
  const randNum = Math.floor(Math.random() * 5);
  const variations = [];
  for (let i = 0; i < randNum; i += 1) {
    variations.push({
      variationType: faker.random.word(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.imageUrl(),
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
  const rand = Math.floor(Math.random() * 3);
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
      title: 'Hot offer',
      subtitle: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
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

seed();

module.exports = {
  seed,
};
