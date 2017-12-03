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
    const tokenSecret = process.env.JWT_SECRET || 'randomstring!^_)$';
    return jwt.sign(user, tokenSecret);
  };

