/* eslint-disable */
const jwt = require('jsonwebtoken');
import { tokenSecret } from '../env/all';
require('dotenv').config();

exports.validateToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers.token;
  if (!token) {
    return res.status(401).send({
      message: 'Unauthorised User!'
    });
  }

  jwt.verify(token, tokenSecret, (err, decoded) => {
    if (err) {
      return res.status(403).send({
        error: 'Token could not be authenticated'
      });
    }
    req.decoded = decoded;
    next();
  });
};
