var bookshelf = require('../config/db');
var Posts = require('./posts');

module.exports = bookshelf.Model.extend({
	tableName: 'users',
	hasTimestamps: true,
  posts: function() {
    return this.hasMany(Posts);
  }
});
