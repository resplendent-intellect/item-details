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
  for (let i = 2; i < 102; i += 1) {
    const newProduct = new Product({
      _id: i,
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

const airpods = new Product({
  _id: 1,
  brand: 'Apple',
  name: 'AirPods Max',
  model: 'MGYH3AM/A',
  color: 'Space Gray',
  sku: 6373460,
  price: 549.00,
  variations: [{
    _id: 1,
    variationType: 'Color',
    variationItems: [{
      _id: 0,
      name: 'Space Gray',
      price: 549.00,
      image: 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/airpods_max_space_gray_1.jpg',
    },
    {
      _id: 1,
      name: 'Sky Blue',
      price: 549.00,
      image: 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/airpods_max_sky_blue.jpg',
    },
    {
      _id: 2,
      name: 'Green',
      price: 549.00,
      image: 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/airpods_max_green.jpg',
    },
    {
      _id: 3,
      name: 'Pink',
      price: 549.00,
      image: 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/airpods_max_pink.jpg',
    },
    {
      _id: 4,
      name: 'Silver',
      price: 549.00,
      image: 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/airpods_max_silver.jpg',
    }],
  }],
  protectionPlans: [
    {
      name: 'AppleCare+ for AirPods Max - 2 Year Plan',
      price: 59.00,
    },
  ],
  inStock: 'Backordered',
  offers: [{
    offerType: 'Cardmember Offers',
    offers: [
      { title: '12 Month Financing' },
      { title: 'Get rewards' },
    ],
  }],
  mightAlsoNeed: {
    name: 'Charger',
    price: 30.00,
  },
});

airpods.save()
  .catch((err) => {
    console.log(err);
  });

module.exports = {
  randomInStock,
  randomVariationItems,
  randomVariations,
  randomProtection,
  randomOffers,
  seed,
};
