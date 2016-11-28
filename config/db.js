var localhostDB = {
	client: 'mysql',
	connection: {
		host:  '127.0.0.1',
		user: 'root',
		password: '',
		database: 'bpls',
		charset: 'utf8'
	}
};

var knex = require('knex')(localhostDB);
var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
