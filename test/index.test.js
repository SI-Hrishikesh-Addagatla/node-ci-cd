const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  let server;

  // Start the server before tests
  beforeAll((done) => {
    server = app.listen(0, () => { // Use port 0 to let the OS assign a random port
      done();
    });
  });

  // Stop the server after tests
  afterAll((done) => {
    server.close(done);
  });

  it('responds with Hello, DevOps!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, DevOps!');
  });
});