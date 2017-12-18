/* eslint-disable import/no-dynamic-require, global-require, import/no-unresolved, import/extensions, max-len, no-unused-vars */

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
import cookieParser from 'cookie-parser';
import { LocalStorage } from 'node-localstorage';
import config from './config/config';
import auth from './config/middlewares/authorization';
import routes from './config/routes';
import expressConfig from './config/express';
import passportConfig from './config/passport';
// import QuestionModel from './app/seeders/questions';
// import AnsersMigration from './app/seeders/answers';


dotenv.config();
const localStorage = new LocalStorage('./scratch');
/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Load configurations
mongoose.connect(config.db);

// Bootstrap models
const modelsPath = paths.join(__dirname, '/app/models');

const walk = (path) => {
  fs.readdirSync(path).forEach((file) => {
    const newPath = paths.join(path, file);
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
passportConfig(passport);

const app = express();

app.use((req, res, next) => {
  next();
});

app.use(cookieParser());
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

// QuestionModel();
// AnsersMigration();

// expose app
export default app;
