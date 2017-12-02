/* eslint-disable import/no-unresolved, import/extensions */
import { expect } from 'chai';
import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);
const searchUser = '/api/search/users';
const inviteUser = '/api/users/invite';

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
