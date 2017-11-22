/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
config = require('../../config/config'),
Schema = mongoose.Schema;

/**
* Article Schema
*/
var ArticleSchema = new Schema({
id: {
    type: Number
},
title: {
    type: String,
    default: '',
    trim: true
},
content: {
    type: String,
    default: '',
    trim: true
}
});

/**
* Statics
*/
ArticleSchema.statics = {
load: function(id, cb) {
    this.findOne({
        id: id
    }).select('-_id').exec(cb);
}
};

/**
 * validate title and content
 * if empty
 */
ArticleSchema.path('title').validate(function(title) {
   return title.length;
}, 'title cannot be blank');

ArticleSchema.path('content').validate(function(content) {
   return content.length;
}, 'content cannot be blank');

mongoose.model('Article', ArticleSchema);