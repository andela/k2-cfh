/* eslint-disable import/no-dynamic-require, global-require, import/no-unresolved, import/extensions, max-len */

import _ from 'underscore';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const env = process.env.NODE_ENV || 'development';

// Load app configuration

module.exports = _.extend(
  require(path.join(__dirname, '/../config/env/all.js')),
  require(path.join(__dirname, '/../config/env/', `${env}.json`)) || {}
);
