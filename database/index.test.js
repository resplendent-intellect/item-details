const { MongoClient } = require('mongodb');
const faker = require('faker');
const {
  randomInStock,
  randomVariations,
  randomProtection,
  randomOffers,
} = require('../seeds/seeds');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb://localhost/bestbuy', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db('bestbuy');
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  test('should insert a doc into collection', async () => {
    const products = db.collection('products');

    const mockProduct = {
      _id: 'some-product-id',
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
    };
    await products.insertOne(mockProduct);

    const insertedProduct = await products.findOne({ _id: 'some-product-id' });
    expect(insertedProduct).toEqual(mockProduct);
    await products.deleteOne({ _id: 'some-product-id' });
  });
});
