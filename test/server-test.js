process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;
const app = require('../server.js');
const chaiHttp = require('chai-http');
const configuration = require('../knexfile')['test'];
const database = require('knex')(configuration);


chai.use(chaiHttp);

describe('Server', () => {
  beforeEach(function(done) {
    database.migrate.rollback()
    .then(function() {
      database.migrate.latest()
      .then(function() {
        return database.seed.run()
        .then(function() {
          done();
        });
      });
    });
  });

  afterEach(function(done) {
    database.migrate.rollback()
    .then(function() {
      done();
    });
  });

  describe('/api/v1/users', ()=>{
    it.skip('GET returns all users', (done)=>{
      chai.request(app)
      .get('/api/v1/users')
      .end((err, res)=> {
        if(err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(30);
        expect(res.body[0]).to.have.property('id');
        expect(res.body[0]).to.have.property('name');
        expect(res.body[0]).to.have.property('email');
        expect(res.body[0]).to.have.property('email');
        expect(res.body[0]).to.have.property('deleted');
        done()
      })
    })

    it.skip('POST creates a new user', (done)=>{
      chai.request(app)
      .post('/api/v1/users')
      .send({
        name: 'Joe Guy',
        email : 'email@gmail.com'
      })
      .end((err, res)=> {
        if(err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(31);
        expect(res.body[30]).to.have.property('id');
        expect(res.body[30].id).to.equal(31)
        expect(res.body[30]).to.have.property('name');
        expect(res.body[30].name).to.equal('Joe Guy');
        expect(res.body[30]).to.have.property('email');
        expect(res.body[30].email).to.equal('email@gmail.com');
        expect(res.body[30]).to.have.property('deleted');
        done()
      })
    })

    it.skip('!!WIP!! POST returns an error if', (done)=>{
      chai.request(app)
      //send bad post request
      .end((err, res)=>{
        expect(res).to.throw;
        expect(res).to.have.status(404)
        done()
      })
    })

  })

  describe('/api/v1/users/:id', ()=>{
    it.skip('GET returns a single user and their creations', (done)=>{
      chai.request(app)
      .get('/api/v1/users/12')
      .end((err, res)=> {
        if(err) { done(err); }
        expect(res).to.have.status(202);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(2);
        expect(res.body[0]).to.be.a('object');
        expect(res.body[0]).to.have.property('user');
        expect(res.body[1]).to.have.property('sounds');
        done()
      })
    })

    it.skip('GET returns an error if user does not exist', (done)=>{
      chai.request(app)
      .get('/api/v1/users/31')
      .end((err, res)=> {
        expect(res).to.throw;
        expect(res).to.have.status(404)
        done()
      })
    })

    it.skip('PATCH returns an updated user', (done)=>{
      chai.request(app)
      .patch('/api/v1/users/12')
      .send({
        name: 'Joe Guy',
        email : 'email@gmail.com'
      })
      .end((err, res)=> {
        if(err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(1);
        console.log(res.body)
        expect(res.body[0]).to.have.property('name');
        expect(res.body[0].name).to.equal('Joe Guy');
        expect(res.body[0]).to.have.property('email');
        expect(res.body[0].email).to.equal('email@gmail.com');
        done()
      })
    })

    it.skip('PATCH returns an error if user does not exist', (done)=>{
      chai.request(app)
      .patch('/api/v1/users/41')
      .send({
        name: 'Joe Guy',
        email : 'email@gmail.com'
      })
      .end((err, res)=>{
        expect(res).to.throw;
        expect(res).to.have.status(404)
        done()
      })
    })

    it.skip('DELETE removes a user', (done)=>{
      chai.request(app)
      .delete('/api/v1/users/1')
      .end((err,res)=>{
        if(err){done(err)}
        expect(res).to.have.status(200)
        expect(res.body).to.have.length(29)
        done()
      })
    })

    it.skip('!!WIP!! DELETE returns an error if', (done)=>{
      chai.request(app)
      //send bad delete request
      .end((err, res)=>{
        expect(res).to.throw;
        expect(res).to.have.status(404)
        done()
      })
    })

  })

  describe('/api/v1/users/:id/creations', () => {
    it.skip('returns a summary of a user\'s creations', (done)=>{
      chai.request(app)
      .get('/api/v1/users/1/creations')
      .end((err, res)=> {
        if(err) { done(err); }
        expect(res).to.have.status(200);
        expect(res.res.text).to.equal("Charles Stone has created 2 compositions and 3 sounds!")
        done()
      })
    })

    it.skip('returns an error if user does not exist', (done)=>{
      chai.request(app)
      .get('/api/v1/users/31/creations')
      .end((err, res)=> {
        expect(res).to.throw;
        expect(res).to.have.status(404)
        done()
      })
    })

  })

  describe('/api/v1/compositions', ()=>{
    it.skip('GET returns all compositions', (done)=>{
      chai.request(app)
      .get('/api/v1/compositions')
      .end((err, res)=> {
        if(err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(50);
        expect(res.body[0]).to.have.property('id');
        expect(res.body[0]).to.have.property('attributes');
        expect(res.body[0]).to.have.property('user_id');
        done()
      })
    })

    it.skip('POST creates a new composition', (done)=>{
      chai.request(app)
      .post('/api/v1/compositions')
      .send({
        attributes: '[{},{},{}]',
        user_id : 4
      })
      .end((err, res)=> {
        if(err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(51);
        expect(res.body[50]).to.have.property('id');
        expect(res.body[50].id).to.equal(51)
        expect(res.body[50]).to.have.property('attributes');
        expect(res.body[50].attributes).to.equal('[{},{},{}]');
        expect(res.body[50]).to.have.property('user_id');
        expect(res.body[50].user_id).to.equal(4);
        expect(res.body[50]).to.have.property('deleted');
        done()
      })
    })

    it.skip('!!WIP!! POST returns an error if', (done)=>{
      chai.request(app)
      //send bad post request
      .end((err, res)=>{
        expect(res).to.throw;
        expect(res).to.have.status(404)
        done()
      })
    })

    it.skip('Returns only compositions with attributes specified in query', (done)=>{
      chai.request(app)
      .get('/api/v1/compositions?complexity=2')
      .end((err,res)=>{
        if(err){done(err)}
        expect(res).to.have.status(200)
        expect(res.body).to.have.length(11)
        done()
      })
    })

    it.skip('Returns an error if query parameter returns no matches', (done)=>{
      chai.request(app)
      .get('/api/v1/compositions?complexity=11')
      .end((err, res)=>{
        expect(res).to.throw;
        expect(res).to.have.status(404)
        done()
      })
    })

  })

  describe('/api/v1/compositions/:id', ()=>{
    it.skip('GET returns a single composition', (done)=>{
      chai.request(app)
      .get('/api/v1/compositions/12')
      .end((err, res)=> {
        if(err) { done(err); }
        expect(res).to.have.status(202);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(1);
        expect(res.body[0]).to.be.a('object');
        expect(res.body[0]).to.have.property('user_id')
        expect(res.body[0]).to.have.property('attributes')
        expect(res.body[0]).to.have.property('id')
        done()
      })
    })

    it.skip('GET returns an error if composition does not exist', (done)=>{
      chai.request(app)
      .get('/api/v1/compositions/51')
      .end((err, res)=> {
        expect(res).to.throw;
        expect(res).to.have.status(404)
        done()
      })
    })

    it.skip('PATCH returns an updated composition', (done)=>{
      chai.request(app)
      .patch('/api/v1/compositions/12')
      .send({
        attributes: '[{},{},{},{,},{}]'
      })
      .end((err, res)=> {
        if(err) { done(err); }
        expect(res).to.have.status(202);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(1);
        console.log(res.body)
        expect(res.body[0]).to.have.property('attributes');
        expect(res.body[0].attributes).to.equal('[{},{},{},{,},{}]');
        done()
      })
    })

    it.skip('PATCH returns an error if composition does not exist', (done)=>{
      chai.request(app)
      .patch('/api/v1/compositions/51')
      .send({
        attributes: '[{},{},{},{,},{}]'
      })
      .end((err, res)=>{
        expect(res).to.throw;
        expect(res).to.have.status(404)
        done()
      })
    })

    it.skip('DELETE removes a composition', (done)=>{
      chai.request(app)
      .delete('/api/v1/compositions/1')
      .end((err,res)=>{
        if(err){done(err)}
        expect(res).to.have.status(200)
        expect(res.body).to.have.length(49)
        done()
      })
    })

    it.skip('!!WIP!! DELETE returns an error if', (done)=>{
      chai.request(app)
      //send bad delete request
      .end((err, res)=>{
        expect(res).to.throw;
        expect(res).to.have.status(404)
        done()
      })
    })

  })

  describe('/api/v1/sounds', ()=>{
    it.skip('GET returns all sounds', (done)=>{
      chai.request(app)
      .get('/api/v1/sounds')
      .end((err, res)=> {
        if(err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(100);
        expect(res.body[0]).to.have.property('id');
        expect(res.body[0]).to.have.property('attributes');
        expect(res.body[0]).to.have.property('user_id');
        done()
      })
    })

    it.skip('POST creates a new sound', (done)=>{
      chai.request(app)
      .post('/api/v1/sounds')
      .send({
        attributes: '[{},{},{}]',
        user_id : 4
      })
      .end((err, res)=> {
        if(err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(101);
        expect(res.body[100]).to.have.property('id');
        expect(res.body[100].id).to.equal(101)
        expect(res.body[100]).to.have.property('attributes');
        expect(res.body[100].attributes).to.equal('[{},{},{}]');
        expect(res.body[100]).to.have.property('user_id');
        expect(res.body[100].user_id).to.equal(4);
        expect(res.body[100]).to.have.property('deleted');
        done()
      })
    })

    it.skip('!!WIP!! POST returns an error if', (done)=>{
      chai.request(app)
      //send bad post request
      .end((err, res)=>{
        expect(res).to.throw;
        expect(res).to.have.status(404)
        done()
      })
    })

  })

  describe('/api/v1/sounds/:id', ()=>{
    it.skip('GET returns a single sound', (done)=>{
      chai.request(app)
      .get('/api/v1/sounds/12')
      .end((err, res)=> {
        if(err) { done(err); }
        expect(res).to.have.status(202);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(1);
        expect(res.body[0]).to.be.a('object');
        expect(res.body[0]).to.have.property('user_id')
        expect(res.body[0]).to.have.property('attributes')
        expect(res.body[0]).to.have.property('id')
        done()
      })
    })

    it.skip('GET returns an error if sounds does not exist', (done)=>{
      chai.request(app)
      .get('/api/v1/sounds/101')
      .end((err, res)=> {
        expect(res).to.throw;
        expect(res).to.have.status(404)
        done()
      })
    })

    it.skip('PATCH returns an updated sounds', (done)=>{
      chai.request(app)
      .patch('/api/v1/sounds/12')
      .send({
        attributes: '[{},{},{},{,},{}]'
      })
      .end((err, res)=> {
        if(err) { done(err); }
        expect(res).to.have.status(202);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).to.have.length(1);
        console.log(res.body)
        expect(res.body[0]).to.have.property('attributes');
        expect(res.body[0].attributes).to.equal('[{},{},{},{,},{}]');
        done()
      })
    })

    it.skip('PATCH returns an error if sound does not exist', (done)=>{
      chai.request(app)
      .patch('/api/v1/sounds/101')
      .send({
        attributes: '[{},{},{},{,},{}]'
      })
      .end((err, res)=>{
        expect(res).to.throw;
        expect(res).to.have.status(404)
        done()
      })
    })

    it.skip('DELETE removes a sound', (done)=>{
      chai.request(app)
      .delete('/api/v1/sounds/1')
      .end((err,res)=>{
        if(err){done(err)}
        expect(res).to.have.status(200)
        expect(res.body).to.have.length(99)
        done()
      })
    })

    it.skip('!!WIP!! DELETE returns an error if', (done)=>{
      chai.request(app)
      //send bad delete request
      .end((err, res)=>{
        expect(res).to.throw;
        expect(res).to.have.status(404)
        done()
      })
    })

  })

})





// describe('GET /', () => {
//   it.skip('should send back a message', (done) => {
//     chai.request(app)
//     .get('/')
//     .end((err, res) => {
//       if(err) { done(err); }
//       expect(res).to.have.status(200);
//       expect(res).to.be.html;
//       done();
//     })
//   })
// })
