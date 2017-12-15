/* eslint-disable */
/**
 * Module dependencies.
 */
import mongoose from 'mongoose';
import config from '../../config/config';

const Schema = mongoose.Schema;

/**
 * Answer Schema
 */
const AnswerSchema = new Schema({
  id: {
    type: Number
  },
  text: {
    type: String,
    default: '',
    trim: true
  },
  official: {
    type: Boolean
  },
  expansion: {
    type: String,
    default: '',
    trim: true
  }
});

/**
 * Statics
 */
AnswerSchema.statics = {
  load: (id, cb) => {
    this.findOne({
      id: id
    }).select('-_id').exec(cb);
  }
};

const AnswerModel = mongoose.model('Answer', AnswerSchema);
export default AnswerModel;
