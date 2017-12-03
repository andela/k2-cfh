/* eslint-disable no-underscore-dangle, no-undef, no-plusplus */
// Import all dependencies
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as TwitterStrategy } from 'passport-twitter';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as GitHubStrategy } from 'passport-github';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import User from '../app/models/user';

export default (passport) => {
  // Serialize sessions
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({
      _id: id
    }, (err, user) => {
      user.email = null;
      user.facebook = null;
      user.hashed_password = null;
      done(err, user);
    });
  });

  // Use local strategy
  passport.use(new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    ((email, password, done) => {
      User.findOne({
        email
      }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {
            message: 'Unknown user'
          });
        }
        if (!user.authenticate(password)) {
          return done(null, false, {
            message: 'Invalid password'
          });
        }
        user.email = null;
        user.hashed_password = null;
        return done(null, user);
      });
    })
  ));

  // Use twitter strategy
  passport.use(new TwitterStrategy(
    {
      consumerKey: process.env.consumerKey,
      consumerSecret: process.env.consumerSecret,
      callbackURL: process.env.twitterCallback
    },
    ((token, tokenSecret, profile, done) => {
      User.findOne({
        'twitter.id_str': profile.id
      }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          user = new User({
            name: profile.displayName,
            username: profile.username,
            provider: 'twitter',
            twitter: profile._json
          });
          user.save((err) => {
            if (err) console.log(err);
            return done(err, user);
          });
        } else {
          return done(err, user);
        }
      });
    })
  ));

  // Use facebook strategy
  passport.use(new FacebookStrategy(
    {
      clientID: process.env.facebookClientID,
      clientSecret: process.env.facebookClientSecret,
      callbackURL: process.env.facebookCallback
    },
    ((accessToken, refreshToken, profile, done) => {
      User.findOne({
        'facebook.id': profile.id
      }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          user = new User({
            name: profile.displayName,
            email: (profile.emails && profile.emails[0].value) || '',
            username: profile.username,
            provider: 'facebook',
            facebook: profile._json
          });
          user.save((err) => {
            if (err) console.log(err);
            user.facebook = null;
            return done(err, user);
          });
        } else {
          user.facebook = null;
          return done(err, user);
        }
      });
    })
  ));

  // Use github strategy
  passport.use(new GitHubStrategy(
    {
      clientID: process.env.githubClientID,
      clientSecret: process.env.githubClientSecret,
      callbackURL: process.env.githubCallback
    },
    ((accessToken, refreshToken, profile, done) => {
      User.findOne({
        'github.id': profile.id
      }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            username: profile.username,
            provider: 'github',
            github: profile._json
          });
          user.save((err) => {
            if (err) console.log(err);
            return done(err, user);
          });
        } else {
          return done(err, user);
        }
      });
    })
  ));

  // Use google strategy
  passport.use(new GoogleStrategy(
    {
      clientID: process.env.googleClientID,
      clientSecret: process.env.googleClientSecret,
      callbackURL: process.env.googleCallback
    },
    ((accessToken, refreshToken, profile, done) => {
      User.findOne({
        'google.id': profile.id
      }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            username: profile.username,
            provider: 'google',
            google: profile._json
          });
          user.save((err) => {
            if (err) console.log(err);
            return done(err, user);
          });
        } else {
          return done(err, user);
        }
      });
    })
  ));
};
