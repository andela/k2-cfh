/**
 * Module dependencies.
 */
import mongoose from 'mongoose';
import User from '../models/user';
import {signUser} from '../../config/jwt'; 

const allAvatars = require('./avatars').all();

/**
* Auth callback
*/
export function authCallback(req, res, next) {
  res.redirect('/chooseavatars');
};

/**
 * Show login form
 * @returns {void} description
 * 
 * @export
 * 
 * @param {any} req
 * @param {any} res
 */
export function signin(req, res) {
  if (!req.user) {
    res.redirect('/#!/signin?error=invalid');
  } else {
    res.redirect('/#!/app');
  }
}

/**
 * Show sign up form
 * @returns {void} description
 * 
 * @export
 * 
 * @param {any} req
 * @param {any} res
 */
export function signup(req, res) {
  if (!req.user) {
    res.redirect('/#!/signup');
  } else {
    res.redirect('/#!/app');
  }
};

/**
* Logout
*/
export function signout(req, res) {
  req.logout();
  res.redirect('/');
};

/**
* Session
*/
export function session(req, res) {
  res.redirect('/');
};

/** 
* Check avatar - Confirm if the user who logged in via passport
* already has an avatar. If they don't have one, redirect them
* to our Choose an Avatar page.
* @export
*
* @param {any} req
* @param {any} res
*
* @returns {object} object
*/
export function checkAvatar(req, res) {
  if (req.user && req.user._id) {
    User.findOne({
      _id: req.user._id
    })
      .exec(function(err, user) {
        if (user.avatar !== undefined) {
          res.redirect('/#!/');
        } else {
          res.redirect('/#!/choose-avatar');
        }
      });
  } else {
  // If user doesn't even exist, redirect to /
    res.redirect('/');
  }

};

/**
 * Create user
 * @export
 * 
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * 
 * @returns {object} object
 */
export function create(req, res) {
  if (req.body.name && req.body.password && req.body.email) {
    User.findOne({
      email: req.body.email
    }).exec(function(err,existingUser) {
      if (!existingUser) {
        var user = new User(req.body);
        // Switch the user's avatar index to an actual avatar url
        user.avatar = avatars[user.avatar];
        user.provider = 'local';
        user.save(function(err) {
          if (err) {
            return res.render('/#!/signup?error=unknown', {
              errors: err.errors,
              user: user
            });
          }
          req.logIn(user, function(err) {
            if (err) return next(err);
            return res.redirect('/#!/');
          });
        });
      } else {
        return res.redirect('/#!/signup?error=existinguser');
      }
    });
  } else {
    return res.redirect('/#!/signup?error=incomplete');
  }
};

/**
 * Create user
 * @export
 * 
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * 
 * @returns {object} object
 */
export function createJwt(req, res) {
  if (req.body.name && req.body.password && req.body.email && req.body.username) {
    User.findOne({
      email: req.body.email
    })
      .exec()
      .then(function (err, existingUser) {
        if (err) {
          return res.status(409).json({
            message: "Email already exists"
          });
        }
        if (!existingUser) {
          const user = new User(req.body);
          user.avatar = avatars[user.avatar];
          user.save(function (error, newUser) {
            if (error) {
              return res.status(500).json({
                message: "Signup not successful"
              });
            }
            const userDetails = {
              id: newUser._id,
              email: newUser.email,
              name: newUser.name,
              username: newUser.username
            };
            const token = signUser(userDetails);
            res.status(201).send({
              message: "Registration successful",
              token,
              userDetails
            });
          });
        }
      });
  } else {
    return res.status(400).json({
      message: "Please enter your credentials"
    });
  }
};

/**
 * Assign avatar to user
 * @export
 * 
 * @param {any} req
 * @param {any} res
 * 
 * @returns {object} response object
 */
export function avatars(req, res) {
// Update the current user's profile to include the avatar choice they've made
  if (req.user && req.user._id && req.body.avatar !== undefined &&
  /\d/.test(req.body.avatar) && avatars[req.body.avatar]) {
    User.findOne({
      _id: req.user._id
    })
      .exec(function(err, user) {
        user.avatar = avatars[req.body.avatar];
        user.save();
      });
  }
  return res.redirect('/#!/app');
};

/**
 * * Add donation
 * @returns {object} object
 *
 * @export
 * @param {any} req
 * @param {any} res
 */
export function addDonation(req, res) {
  if (req.body && req.user && req.user._id) {
  // Verify that the object contains crowdrise data
    if (req.body.amount && req.body.crowdrise_donation_id && req.body.donor_name) {
      User.findOne({
        _id: req.user._id
      })
        .exec(function(err, user) {
          // Confirm that this object hasn't already been entered
          var duplicate = false;
          for (var i = 0; i < user.donations.length; i++ ) {
            if (user.donations[i].crowdrise_donation_id === req.body.crowdrise_donation_id) {
              duplicate = true;
            }
          }
          if (!duplicate) {
            console.log('Validated donation');
            user.donations.push(req.body);
            user.premium = 1;
            user.save();
          }
        });
    }
  }
  res.send();
};

/**
 * Show profile
 * @returns {object} object
 * @export
 * 
 * @param {any} request
 * @param {any} response
 */
export function show(req, res) {
  var user = req.profile;

  res.render('users/show', {
    title: user.name,
    user: user
  });
};

/**
 * Send User
 * @returns {object} object
 * @export
 * 
 * @param {any} request
 * @param {any} response
 */
export function me(req, res) {
  res.jsonp(req.user || null);
};

/**
 * Find user by id
 * @returns {object} object
 * @export
 *
 * @param {any} request
 * @param {any} response
 * @param {any} next
 * @param {any} id
 */
export function user(req, res, next, id) {
  User
    .findOne({
      _id: id
    })
    .exec(function(err, user) {
      if (err) return next(err);
      if (!user) return next(new Error('Failed to load User ' + id));
      req.profile = user;
      next();
    });
};
