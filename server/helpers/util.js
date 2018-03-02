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
  removeComments: async (parentId) => {
    try {
      let comments = await Posts.findAll({ where: { parent_id: parentId } });
      await comments.forEach(async (comment) => {
        await module.exports.removeComments(comment.id);
        await Posts.destroy({ where: { id: comment.id } });
      });
    } catch (err) {
      throw err;
    }
  }
};