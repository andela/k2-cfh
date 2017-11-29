var chai = require('chai'),
  chaiHttp = require('chai-http'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

var server = require('../../server');

var expect = chai.expect;

chai.use(chaiHttp);

describe('POST Test suites for User sign up', () => {
  describe('validation test', () => {
    it('should return \'Please enter your credentials\' when user omits name field', (done) => {
      chai.request(server)
        .post('/api/auth/signup')
        .set('Accept', 'application/json')
        .send({
          email: 'moh@gmail.com',
          username: 'moksty'
        })
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
          expect(res.body.message).to.equal('Please enter your credentials');
          done();
        });
    });

    it('should return \'Please enter your credentials\' when user omits email field', (done) => {
      chai.request(server)
        .post('/api/auth/signup')
        .set('Accept', 'application/json')
        .send({
          name: 'Isioye Mohammed',
          username: 'moksty'
        })
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
          expect(res.body.message).to.equal('Please enter your credentials');
          done();
        });
    });

    it('should return \'Please enter your credentials\' when user omits username field', (done) => {
      chai.request(server)
        .post('/api/auth/signup')
        .set('Accept', 'application/json')
        .send({
          name: 'Isioye Mohammed',
          email: 'moh@gmail.com'
        })
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
          expect(res.body.message).to.equal('Please enter your credentials');
          done();
        });
    });

    it('should return \'Please enter your credentials\' when user omits password field', (done) => {
      chai.request(server)
        .post('/api/auth/signup')
        .set('Accept', 'application/json')
        .send({
          name: 'Isioye Mohammed',
          email: 'moh@gmail.com',
          username: 'moksty'
        })
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
          expect(res.body.message).to.equal('Please enter your credentials');
          done();
        });
    });
  });

  describe('successful sign up', () => {
    it('should return a message and a token', (done) => {
      chai.request(server)
        .post('/api/auth/signup')
        .set('Accept', 'application/json')
        .send({
          name: 'Isioye Mohammed',
          password: 'somtnesraskdf',
          email: 'mohsty@gmail.com',
          username: 'moksty'
        })
        .end((err, res) => {
          expect(res.statusCode).to.equal(201);
          expect(res.body).to.have.all.deep.keys('message', 'token');
          expect(res.body.message).to.equal('Registration successful');
          done();
        });
    });

    it('should return \'Email already exists\' error when using a picked email', (done) => {
      chai.request(server)
        .post('/api/auth/signup')
        .set('Accept', 'application/json')
        .send({
          name: 'Isioye Mohammed',
          password: 'somtnesraskdf',
          email: 'mohsty@gmail.com',
          username: 'moksty'
        })
        .end((err, res) => {
          expect(res.statusCode).to.equal(409);
          expect(res.body.message).to.equal('Email already exists');
          done();
        });
    });
  });
});
