const Posts = require('../db/models/posts.js');
const Likes = require('../db/models/likes.js');

module.exports = {
  findCommentsOfPost: async (parentId) => {
    try {
      let comments = await Posts.findAll({ where: { parent_id: parentId } });
      let comms = [];

      for (let i = 0; i < comments.length; i++) {
        comments[i].dataValues.comments = await module.exports.findCommentsOfPost(comments[i].id);
        comms.push(comments[i].dataValues);
      }
      
      return comms;
    } catch (err) {
      throw err;
    }
  },
  removeComments: async (parentId) => {
    try {
      let comments = await Posts.findAll({ where: { parent_id: parentId } });
      
      comments.forEach(async (comment) => {
        module.exports.removeComments(comment.id);
        await Likes.destroy({ where: { post_id: comment.id } });
        await Posts.destroy({ where: { id: comment.id } });
      });
    } catch (err) {
      throw err;
    }
  }
};