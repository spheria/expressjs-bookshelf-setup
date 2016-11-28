var Post = require('../models/posts');

module.exports = {
  getPosts :  (req, res) => {
    new Post().fetchAll()
    .then(function (posts) {
      res.json(posts);
    }).catch((err) => {
      console.log(err);
      res.send('An error occured');
    });
  },
  createPost: (req, res, next) => {
    let model = new Post({
        title: 'The very First Post',
        description: 'describe the post',
        body: 'this supposed to have the post body.',
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
