const jwt = require('jsonwebtoken');

require('dotenv').config();

const key = process.env.JWT_SECRET;

exports.validateToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers.token;
  if (!token) {
    return res.status(401).send({
      message: 'Unauthorised User!'
    });
  }

  jwt.verify(token, key, (err, decoded) => {
    if (err) {
      return res.status(403).send({
        error: 'Token could not be authenticated'
      });
    }
    req.decoded = decoded;
    next();
  });
};
