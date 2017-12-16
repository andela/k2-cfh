/* eslint-disable import/no-unresolved, import/extensions, no-unused-vars */
import jwt from 'jsonwebtoken';
import { tokenSecret } from '../config/env/all';

export const verify = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, tokenSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: 'Failed to authenticate token'
        });
      }
      req.user = decoded;
      return next();
    });
  } else {
    return res.status(403).json({
      success: false,
      message: 'Token not provided'
    });
  }
};

export const signUser = (user) => {
  const token = process.env.JWT_SECRET || 'randomstring!^_)$';
  return jwt.sign(user, token);
};

export const isLoggedIn = (req, res, next) => {
  const token = req.headers.auth;
  jwt.verify(token, tokenSecret, (err, result) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: 'Failed to authenticate token'
      });
    }
    next();
  });
};

/**
   * Verify JWT token
   *
   * @param {string} token
   * @returns {object} user
   * @memberof Auth
   */
export const verifyToken = (token) => {
  let user = {};
  if (token) {
    const secret = process.env.JWT_SECRET || 'randomstring!^_)$';
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        user = { id: null };
      } else {
        user = decoded;
      }
    });
  } else {
    user = { id: null };
  }

  return user;
};
