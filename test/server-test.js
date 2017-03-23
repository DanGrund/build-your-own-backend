const chai = require('chai');
const expect = chai.expect;
const app = require('../server.js');
const chaiHttp = require('chai-http');
const configuration = require('../knexfile')['test'];
const database = require('knex')(configuration);

chai.use(chaiHttp);

describe('Server', () => {
  it('should exist', () => {
    expect(app).to.exist;
  });


});

describe('GET /', () => {
  it('should send back a message', (done) => {
    chai.request(app)
    .get('/')
    .end((err, res) => {
      if(err) { done(err); }
      expect(res).to.have.status(200);
      expect(res).to.be.html;
      done();
    })
  })
})

describe('GET /api/v1/users', (){

})

describe('GET /api/v1/users/:id', (){

})

describe('POST /api/v1/users', (){

})

describe('PATCH /api/v1/users', (){

})

describe('DELETE /api/v1/users', (){

})
