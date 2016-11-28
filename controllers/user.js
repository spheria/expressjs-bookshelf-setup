var User = require('../models/users');
var Posts = require('../models/posts');
var Tags = require('../models/tags');

module.exports = {
  getUsers :  (req, res) => {
    new User().fetchAll()
    .then(function (users) {
      res.json(users);
    }).catch((err) => {
      console.log(err);
      res.send('An error occured');
    });
  },
  createUser : (req, res, next) => {
    let model = new User({
        firstname: 'Anne',
        lastname: 'Curtis',
        email: 'annecurtis@gmail.net',
        password: 'lolgiggles42',
        role: "admin"
        })
        .save()
        .then((model) => {
          res.json(model);
        }).catch((err) => {
          console.log(err);
          res.send('An error occured');
        });
    },
}
