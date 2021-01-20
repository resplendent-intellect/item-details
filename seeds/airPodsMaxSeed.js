const faker = require('faker');
const { Product } = require('../database/index');

const airPodsMax = new Product({
  brand: 'Apple',
  name: 'AirPods Max',
  model: 'MGYH3AM/A',
  color: 'Space Gray',
  sku: 6373460,
  price: 549.00,
  variations: [{
    variationType: 'Color',
    variationItems: [{
      name: 'Space Gray',
      price: 549.00,
      image: faker.image.imageUrl(),
    },
    {
      name: 'Sky Blue',
      price: 549.00,
      image: faker.image.imageUrl(),
    },
    {
      name: 'Green',
      price: 549.00,
      image: faker.image.imageUrl(),
    },
    {
      name: 'Pink',
      price: 549.00,
      image: faker.image.imageUrl(),
    },
    {
      name: 'Silver',
      price: 549.00,
      image: faker.image.imageUrl(),
    }],
  }],
  protectionPlans: [
    {
      name: 'AppleCare+ for AirPods Max - 2 Year Plan',
      price: 59.00,
    },
  ],
  inStock: 'Backordered',
  offers: [
    { title: '1 Month of Pandora with Select Products' },
    { title: '3 Months of TIDAL with Select Products' },

  ],
  mightAlsoNeed: {
    name: 'Charger',
    price: 30.00,
  },
});

airPodsMax.save()
  .catch((err) => {
    throw err;
  });
