var express = require('express');
var router = express.Router();

var user = require('../controllers/user');
var post = require('../controllers/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express-Bookshelf-Setup' });
});
router.get('/users', user.getUsers);
router.get('/user/create', user.createUser);
router.get('/posts', post.getPosts);
router.get('/post/create', post.createPost);

module.exports = router;
