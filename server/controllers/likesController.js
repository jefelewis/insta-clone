const Likes = require('../db/models/likes.js');
const Posts = require('../db/models/posts.js');

module.exports = {
  addLike: (like) => {
    return new Promise((resolve, reject) => {
      Likes.findOrCreate({ where: like })
        .spread((instance, created) => {
          if (created) {
            Posts.increment('likesCount', { where: { id: like.post_id } });
            resolve();
          } else {
            reject();
          }
        });
    });
  },
  removeLike: (like) => {
    return new Promise((resolve, reject) => {
      Likes.destroy({ where: like })
        .then(() => {
          Posts.decrement('likesCount', { where: { id: like.post_id } })
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};