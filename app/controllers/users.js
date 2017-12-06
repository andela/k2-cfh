/* eslint-disable max-len, no-underscore-dangle, no-undef, no-plusplus, import/no-unresolved, import/extensions */
/**
 * Module dependencies.
 */
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';
import validator from 'validator';
import avatarImport from './avatars';
import { signUser } from '../../config/jwt';

const User = mongoose.model('User');
const avatars = avatarImport.all();

/**
* function authCallback
*
* @param {req} req
* @param {res} res
* @param {next} next
*
* @returns {object} object
*/
exports.authCallback = (req, res) => {
  res.redirect('/chooseavatars');
};

/**
 * function signin
 *
 * @param {any} req
 * @param {any} res
 * @returns {null} null
 */
exports.signin = (req, res) => {
  if (!req.user) {
    res.redirect('/#!/signin?error=invalid');
  } else {
    res.redirect('/#!/app');
  }
};

/**
 * Show sign up form
 *
 * @param {any} req
 * @param {any} res
 * @returns {null} null
 */
exports.signup = (req, res) => {
  if (!req.user) {
    res.redirect('/#!/signup');
  } else {
    res.redirect('/#!/app');
  }
};

/**
 * Logout
 *
 * @param {any} req
 * @param {any} res
 * @returns {null} null
 */
exports.signout = (req, res) => {
  req.logout();
  res.redirect('/');
};

/**
 * Session
 *
 * @param {any} req
 * @param {any} res
 * @returns {null} null
 */
exports.session = (req, res) => {
  res.redirect('/');
};

/**
 * * Check avatar - Confirm if the user who logged in via passport
 * already has an avatar. If they don't have one, redirect them
 * to our Choose an Avatar page.
 *
 * @param {any} req
 * @param {any} res
 * @returns {null} null
 */
exports.checkAvatar = (req, res) => {
  if (req.user && req.user._id) {
    User.findOne({
      _id: req.user._id
    })
      .exec((err, user) => {
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
 *
 * @param {any} req
 * @param {any} res
 * @returns {object} object
 */
exports.create = (req, res) => {
  if (req.body.name && req.body.password && req.body.email) {
    User.findOne({
      email: req.body.email
    }).exec((err, existingUser) => {
      if (!existingUser) {
        const user = new User(req.body);
        // Switch the user's avatar index to an actual avatar url
        user.avatar = avatars[user.avatar];
        user.provider = 'local';
        user.save((err) => {
          if (err) {
            return res.render('/#!/signup?error=unknown', {
              errors: err.errors,
              user
            });
          }
          req.logIn(user, (err) => {
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
 * Create user with JWT on sign up
 * @export
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 *
 * @returns {object} object
 */
exports.createJwt = (req, res) => {
  if (req.body.name && req.body.password && req.body.email && req.body.username) {
    User.findOne({
      email: req.body.email
    })
      .exec()
      .then((err, existingUser) => {
        if (err) {
          return res.status(409).json({
            message: 'Email already exists'
          });
        }
        if (!existingUser) {
          const appUser = new User(req.body);
          appUser.avatar = avatars[appUser.avatar];
          appUser.save((error, newUser) => {
            if (error) {
              return res.status(500).json({
                message: 'Signup not successful'
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
              message: 'Registration successful',
              token,
              userDetails
            });
          });
        }
      });
  } else {
    return res.status(400).json({
      message: 'Please enter your credentials'
    });
  }
};

/**
 * Create user with JWT on sign in
 * @export
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 *
 * @returns {object} object
 */
exports.loginJwt = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: 'Please enter your credentials' });
  }
  if (!validator.isEmail(req.body.email)) {
    return res.status(422).json({ message: 'Please enter valid email' });
  }
  User.findOne({ email }).exec((err, user) => {
    if (err) return next(err);
    if (!user) return res.status(401).send({ message: 'Incorrect username or password' });
    const checkPassword = user.authenticate(password);
    if (!checkPassword) {
      return res.status(401).json({
        message: 'Invalid Credentials'
      });
    }
    const userDetails = {
      id: user._id,
      name: user.name,
      email: user.email
    };
    const token = signUser(userDetails);
    res.status(200).send({
      message: 'Log in successful',
      token
    });
  });
};

/**
 * Assign avatar to user
 *
 * @param {any} req
 * @param {any} res
 * @returns {object} object
 */
exports.avatars = (req, res) => {
  // Update the current user's profile to include the avatar choice they've made
  if (req.user && req.user._id && req.body.avatar !== undefined &&
  /\d/.test(req.body.avatar) && avatars[req.body.avatar]) {
    User.findOne({
      _id: req.user._id
    })
      .exec((err, user) => {
        user.avatar = avatars[req.body.avatar];
        user.save();
      });
  }
  return res.redirect('/#!/app');
};

exports.addDonation = (req, res) => {
  if (req.body && req.user && req.user._id) {
    // Verify that the object contains crowdrise data
    if (req.body.amount && req.body.crowdrise_donation_id && req.body.donor_name) {
      User.findOne({
        _id: req.user._id
      })
        .exec((err, user) => {
        // Confirm that this object hasn't already been entered
          let duplicate = false;
          for (let i = 0; i < user.donations.length; i++) {
            if (user.donations[i].crowdrise_donation_id === req.body.crowdrise_donation_id) {
              duplicate = true;
            }
          }
          if (!duplicate) {
            // console.log('Validated donation');
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
 *  Show profile
/**
 *
 *
 * @param {any} req
 * @param {any} res
 * @returns {null} null
 */
exports.show = (req, res) => {
  const user = req.profile;

  res.render('users/show', {
    title: user.name,
    user
  });
};

/**
 *Send User
 *
 * @param {any} req
 * @param {any} res
 * @returns {null} null
 */
exports.me = (req, res) => {
  res.jsonp(req.user || null);
};

/**
 * Find user by id
 *
 * @param {any} req
 * @param {any} res
 * @param {any} next
 * @param {any} id
 * @returns {object} object
 */
exports.user = (req, res, next, id) => {
  User
    .findOne({
      _id: id
    })
    .exec((err, user) => {
      if (err) return next(err);
      if (!user) return next(new Error(`Failed to load User ${id}`));
      req.profile = user;
      next();
    });
};

// Search users controller
exports.searchUser = (req, res) => {
  const searchQuery = req.query.q;
  if (searchQuery === '') {
    return res.status(400).json({
      message: 'Enter a value'
    });
  }
  User.find({ name: new RegExp(searchQuery, 'i') }, 'name email').exec((error, users) => {
    if (error) {
      return res.status(500).json(error);
    }
    if (users.length === 0) {
      return res.status(404).json({
        message: 'No user found'
      });
    }
    return res.status(200).json(users);
  });
};

// invite user controller
exports.inviteUser = (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });
  const mailOptions = {
    from: 'Cards for Humanity',
    to: req.body.mailTo,
    subject: 'Invitation to join a session of cfh',
    text: `Click the link to join game: ${req.body.gameLink}`,
    html: `<b>click the link to join game: ${req.body.gameLink}</b>`
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.status(500).json({
        message: 'An error occured while trying to send your email invite'
      });
    } else {
      res.status(200).json({
        message: 'Email invite sent successfully'
      });
    }
  });
};
