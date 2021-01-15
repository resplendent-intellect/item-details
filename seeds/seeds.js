const faker = require('faker');
const { Product } = require('../database/index');

const randomInStock = () => {
  const choices = ['in stock', 'sold out', 'backordered'];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
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
      variations: [{
        variationType: faker.random.word(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.imageUrl(),
      }],
      protectionPlans: [{
        name: 'Coverage Plan',
        price: faker.commerce.price(),
      }],
      inStock: randomInStock(),
      offers: [{
        title: 'Hot offer',
        subtitle: faker.lorem.sentence(),
        body: faker.lorem.paragraph(),
      }],
      mightAlsoNeed: [{
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
      }],
    });
    newProduct.save()
    // .then((results) => {

    // })
      .catch((err) => {
        throw err;
      });
  }
};

seed();
