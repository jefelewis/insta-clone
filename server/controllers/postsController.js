const Posts = require('../db/models/posts.js');
const util = require('../helpers/util.js');

module.exports = {
  addPost: (post) => {
    return Posts.create(post);
  },
  fetchUserPosts: (id) => {
    return new Promise((resolve, reject) => {
      Posts.findAll({ where: { user_id: id, type: 0 } })
        .then((photos) => {
          Posts.findAll({ where: { user_id: id, type: 1 } })
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