/* eslint-disable import/no-unresolved, import/extensions */
import chai, { expect } from 'chai';
import supertest from 'supertest';
import mongoose from 'mongoose';
import app from '../../server';

const request = supertest(app);
const searchUser = '/api/search/users';
const inviteUser = '/api/users/invite';
const User = mongoose.model('User');

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

  it('should return user object if user is found', (done) => {
    request.get(`${searchUser}?q=john`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
      });
    done();
  });
});

describe('Invite user', () => {
  it('should status 200 if user is successfully invited', (done) => {
    request.post(`${inviteUser}`)
      .send({
        mailTo: 'john@gmail.com',
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

  describe('successful sign up', () => {
    it('should return a message and a token', (done) => {
      request.post('/api/auth/signup')
        .set('Accept', 'application/json')
        .send({
          name: 'Isioye Mohammed',
          password: 'somtnesraskdf',
          email: 'mohsty@gmail.com',
          username: 'moksty'
        })
        .end((err, res) => {
          expect(res.statusCode).to.equal(201);
          expect(res.body).to.have.all.deep.keys('message', 'token', 'userDetails');
          expect(res.body.message).to.equal('Registration successful');
          done();
        });
    });

    it('should return \'Email already exists\' error when using a picked email', (done) => {
      request.post('/api/auth/signup')
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
