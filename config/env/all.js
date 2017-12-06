/* eslint-disable import/no-unresolved, import/extensions, no-var, no-path-concat, prefer-template, no-unused-vars, max-len */
var path = require('path'),
  rootPath = path.normalize(__dirname + '/../..');

var keys = rootPath + '/keys.txt';

module.exports = {
  root: rootPath,
  port: process.env.PORT || 3000,
  db: process.env.MONGOHQ_URL,
  tokenSecret: process.env.JWT_SECRET
};
