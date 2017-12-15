/* eslint-disable */

/**
 * Module dependencies.
 */
const mongoose = require('mongoose'),
config = require('../../config/config'),
Schema = mongoose.Schema;


/**
* Gamelog Schema
*/
const GamelogSchema = new Schema({
id: {
  type: String
},
gameId: {
  type: String,
  default: '',
},
winner: {
  type: Object,
  default: '',
  trim: true
},
players: {
  type: Object,
  default: '',
},
});

const Gamelog = mongoose.model('Gamelog', GamelogSchema);

module.exports = Gamelog;