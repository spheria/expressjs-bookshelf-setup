var bookshelf = require('../config/db');
var Tag = require('./tags');

module.exports = bookshelf.Model.extend({
  tableName: 'posts',
  tags: function() {
    return this.belongsToMany(Tag);
  }
});
