/*  eslint-disable */
import async from 'async';
import { createGame } from '../app/controllers/gameHistory';
import { isLoggedIn } from '../config/jwt';

const route = (app, passport, auth) => {
  // User Routes
  const users = require('../app/controllers/users');
  const logGame = require('../app/controllers/gamelog');
  const checkToken = require('./middlewares/auth');

  app.post('/api/games/:gameID/start');
  app.param('gameID', logGame.saveGameLog);

  app.get('/signout', users.signout);
  // Add friends
  app.put('/api/user/friends', checkToken.validateToken, users.addFriend);
  app.get('/api/user/friends', checkToken.validateToken, users.getFirendsList);

  // Notification routes
  const notification = require('../app/controllers/notification');
  app.post('/api/notifications', checkToken.validateToken, notification.addNotification);
  app.get('/api/notifications', checkToken.validateToken, notification.loadNotification);
  app.put('/api/notification/:id', checkToken.validateToken, notification.readNotification);
  
  app.get('/api/leaderboard', logGame.getLeaderBoard);
  app.get('/api/games/history', logGame.gameHistory);
  app.get('/signin', users.signin);
  app.get('/signup', users.signup);
  app.get('/chooseavatars', users.checkAvatar);

  app.get('/signout', users.signout);
  // Setting up the users api
  app.post('/users', users.create);
  app.post('/users/avatars', users.avatars);

  app.get('/signout', users.signout);
  app.post('/api/auth/signup', users.createJwt);
  app.post('/api/auth/signin', users.loginJwt);
  app.post('/api/region', users.setRegion);

  // Donation Routes
  app.post('/donations', users.addDonation);
  app.get('/api/donations', users.getDonations);

  app.post('/users/session', passport.authenticate('local', {
    failureRedirect: '/signin',
    failureFlash: 'Invalid email or password.'
  }), users.session);

  app.get('/users/me', users.me);
  app.get('/users/:userId', users.show);

  // Setting the facebook oauth routes
  app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/'
  }), users.socialAuth);

  // Setting the github oauth routes
  app.get('/auth/github', passport.authenticate('github', { failureRedirect: '/' }));

  app.get('/auth/github/callback', passport.authenticate('github', {
    failureRedirect: '/'
  }), users.socialAuth);

  // Setting the twitter oauth routes
  app.get('/auth/twitter', passport.authenticate('twitter', { failureRedirect: '/' }));

  app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    failureRedirect: '/'
  }), users.socialAuth);

  // Setting the google oauth routes
  app.get('/auth/google', passport.authenticate('google', {
    failureRedirect: '/',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ]
  }));

  app.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/'
  }), users.socialAuth);

  // Finish with setting up the userId param
  app.param('userId', users.user);

  // Answer Routes
  const answers = require('../app/controllers/answers');
  app.get('/answers', answers.all);
  app.get('/answers/:answerId', answers.show);
  // Finish with setting up the answerId param
  app.param('answerId', answers.answer);

  // Question Routes
  const questions = require('../app/controllers/questions');
  app.get('/questions', questions.all);
  app.get('/questions/:questionId', questions.show);
  // Finish with setting up the questionId param
  app.param('questionId', questions.question);

  // Avatar Routes
  const avatars = require('../app/controllers/avatars');
  app.get('/avatars', avatars.allJSON);

  // Home route
  const index = require('../app/controllers/index');
  app.get('/play', index.play);
  app.get('/', index.render);
  app.get('/api/search/users', users.searchUser);
  app.post('/api/users/invite', users.inviteUser);

  // game route
  app.post('/api/games/:id/start', isLoggedIn, createGame);
};

export default route;
