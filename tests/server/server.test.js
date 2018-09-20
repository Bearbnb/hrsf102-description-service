const request = require('supertest');
const app = require('../../server/app');

describe('Server', () => {
  it('should respond to get to rooturl', () => {
    return request(app).get('/1/').then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });

  it('should respond to a GET method to listings', () => {
    return request(app).get('/descriptions/1').then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });

  it('respond with json', (done) => {
    request(app)
      .get('/descriptions/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
