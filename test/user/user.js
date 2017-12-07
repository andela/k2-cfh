/* eslint-disable import/no-unresolved, import/extensions */
import chai, { expect } from 'chai';
import supertest from 'supertest';
import mongoose from 'mongoose';
import faker from 'faker';
import app from '../../server';

const request = supertest(app);
const searchUser = '/api/search/users';
const inviteUser = '/api/users/invite';
const User = mongoose.model('User');
const fakerName = faker.name.findName();
const fakerEmail = faker.internet.email();
const fakerPassword = faker.internet.password();

describe('Search for user', () => {
  it('should return "Enter a value" if input is not provided', (done) => {
    request.get(`${searchUser}?q=`)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Enter a value');
        done();
      });
  });

  it('should return "No user found" is user is not found', (done) => {
    request.get(`${searchUser}?q=lidsufnlinfid`)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body.message).to.equal('No user found');
      });
    done();
  });
});

describe('Invite user', () => {
  it('should status 200 if user is successfully invited', (done) => {
    request.post(`${inviteUser}`)
      .send({
        mailTo: fakerEmail,
        gameLink: 'http://localhost:3000/#/gameLinkHere'
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Email invite sent successfully');
      });
    done();
  });

  it('should return status 400 if no email is provided', (done) => {
    request.post(`${inviteUser}`)
      .send({
        mailTo: '',
        gameLink: ''
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('An error occured while trying to send your email invite');
      });
    done();
    });
  });

describe('POST Test suites for User sign up', () => {
  describe('validation test', () => {
    it('should return \'Please enter your credentials\' when user omits name field', (done) => {
      request.post('/api/auth/signup')
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
      request.post('/api/auth/signup')
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
      request.post('/api/auth/signup')
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
      request.post('/api/auth/signup')
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
});

describe('Test suite for user login', () => {
  it('should return "Please enter your credentials" if email or password fields are empty', (done) => {
    request.post('/api/auth/signin')
    .set('Accept', 'application/json')
    .send({
      email: '',
      password: '',
    })
    .end((err, res) => {
      expect(res.statusCode).to.equal(400);
      expect(res.body.message).to.equal('Please enter your credentials');
      done();
    });
  });

  it('should return "Please enter valid email" if email format is incorrect', (done) => {
    request.post('/api/auth/signin')
    .set('Accept', 'application/json')
    .send({
      email: 'buharigmail.com',
      password: 'password',
    })
    .end((err, res) => {
      expect(res.statusCode).to.equal(422);
      expect(res.body.message).to.equal('Please enter valid email');
      done();
    });
  });

  it('should return "Invalid Credentials" if password is incorrect', (done) => {
    request.post('/api/auth/signin')
    .set('Accept', 'application/json')
    .send({
      email: fakerEmail,
      password: fakerPassword + 'ioubjbf',
    })
    .end((err, res) => {
      expect(res.statusCode).to.equal(401);
      expect(res.body.message).to.equal('Incorrect username or password');
      done();
    });
  });
});
