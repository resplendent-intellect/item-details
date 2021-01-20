const request = require('supertest');
const { app } = require('./index');

describe('GET /products/:id', () => {
  test('It should respond with a product object', async (done) => {
    const response = await request(app).get('/products/6007a3853fdca13bc5b1a2e5');
    expect(response.statusCode).toBe(200);
    // expect(response.body._id).toBe('6007a3853fdca13bc5b1a2e5');
    done();
  });
});
