const Posts = require('../db/models/posts.js');
const Users = require('../db/models/users.js');
const util = require('../helpers/util.js');

module.exports = {
  addPost: (username, post) => {
    return new Promise((resolve, reject) => {
      Users.findOne({ where: { username: username } })
        .then((user) => {
          console.log(post);
          console.log('next');
          post.user_id = user.id;
          console.log('next2');
          console.log(post);
          Posts.create(post)
            .then(() => {
              resolve();
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  fetchUserPosts: (username) => {
    return new Promise((resolve, reject) => {
      Users.findOne({ where: { username: username } })
        .then((user) => {
          Posts.findAll({ where: { user_id: user.id, type: 0 } })
            .then((photos) => {
              Posts.findAll({ where: { user_id: user.id, type: 1 } })
                .then((videos) => {
                  resolve(photos.concat(videos)
                    .map((post) => {
                      post.comments = util.findComments(post.id)
                        .then(() => {
                          return post;
                        });
                    }));
                });
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  removePost: (id) => {
    util.removeComments(id);
    return Posts.destroy({ where: { id: id } });
  },
  updatePost: (id, data) => {
    return Posts.update(data, { where: { id: id } });
  }
};