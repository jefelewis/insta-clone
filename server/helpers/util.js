const Posts = require('../db/models/posts.js');

module.exports = {
  findComments: async (parentId) => {
    try {
      let comments = await Posts.findAll({ where: { parent_id: parentId } });

      return comments.map(async (comment) => {
        comment.dataValues.comments = await module.exports.findComments(comment.id);
        return comment.dataValues;
      });
    } catch (err) {
      return err;
    }
  },
  removeComments: (parentId) => {
    Posts.findAll({ parent_id: parentId })
    .then((comments) => {
      comments.forEach((comment) => {
        module.exports.removeComments(comment.id);
        Posts.destroy({ where: { id: comment.id} });
      });
    });
  }
};