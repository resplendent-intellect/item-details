const request = require('supertest');
const { app } = require('./index');

describe('GET /products/:id', () => {
  test('It should respond with a product object', async (done) => {
    const response = await request(app).get('/api/products/1');
    expect(response.statusCode).toBe(200);
    done();
  });
});
