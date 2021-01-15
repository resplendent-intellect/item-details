const { MongoClient } = require('mongodb');
const faker = require('faker');

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

  it('should insert a doc into collection', async () => {
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