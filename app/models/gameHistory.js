/* eslint-disable */
import mongoose from 'mongoose';
import config from '../../config/config';

const { Schema } = mongoose;

/**
 * Answer Schema
 */
const GameHistorySchema = new Schema({
  gameID: { type: String, required: true },
  logTime: { type: Date, default: Date.now },
  rounds: { type: Number, default: 0 },
  creator: { type: String, required: true },
  winner: { type: String, default: '' },
  players: { type: Array, default: [] },
});

// export model
export default mongoose.model('GameHistory', GameHistorySchema);
