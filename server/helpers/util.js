const Posts = require('../db/models/posts.js');

module.exports = {
  findComments: (parentId) => {
    return new Promise((resolve, reject) => {
      Posts.findAll({ where: { parent_id: parentId } })
      .then((comments) => {
        resolve(comments.map((comment) => {
          comment.comments = findComments(comment.id)
          .then(() => {
            return comment;
          });
        }));
      });
    });
  },
  removeComments: (parentId) => {
    Posts.findAll({ parent_id: parentId })
    .then((comments) => {
      comments.forEach((comment) => {
        removeComments(comment.id);
        Posts.destroy({ where: { id: comment.id} });
      });
    });
  }
};