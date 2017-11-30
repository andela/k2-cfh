/* eslint-disable, global-require, import/no-dynamic-require import/no-unresolved */
/**
 * Module dependencies.
 */
import io from 'socket.io';
import express from 'express';
import fs from 'fs';
import passport from 'passport';
import logger from 'mean-logger';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import paths from 'path';
import config from './config/config';
import auth from './config/middlewares/authorization';
import routes from './config/routes';
import expressConfig from './config/express';

dotenv.config();

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Load configurations
// if test env, load example file
const env = process.env.NODE_ENV || 'development';
// Bootstrap db connection
const db = mongoose.connect(config.db);

// Bootstrap models
const modelsPath = paths.join(__dirname, '/app/models');

const walk = (path) => {
  fs.readdirSync(path).forEach((file) => {
    const newPath = path + '/' + file;
    const stat = fs.statSync(newPath);
    if (stat.isFile()) {
      if (/(.*)\.(js|coffee)/.test(file)) {
        require(newPath);
      }
    } else if (stat.isDirectory()) {
      walk(newPath);
    }
  });
};
walk(modelsPath);

// bootstrap passport config
require('./config/passport')(passport);

const app = express();

app.use((req, res, next) => {
  next();
});

// express settings
expressConfig(app, passport, mongoose);

// Bootstrap routes
routes(app, passport, auth);

// Start the app by listening on <port>
const { port } = config;
const server = app.listen(port);
const ioObj = io.listen(server, { log: false });
// game logic handled here
require('./config/socket/socket')(ioObj);

// Initializing logger
logger.init(app, passport, mongoose);

// expose app
exports = app;
module.exports = app;
