const Posts = require('../db/models/posts.js');
const Users = require('../db/models/users.js');
const util = require('../helpers/util.js');

module.exports = {
  addPost: async (username, post) => {
    try {
      let user = await Users.findOne({ where: { username: username } });
      post.user_id = user.id;
      await Posts.create(post);
    } catch (err) {
      throw err;
    }
  },
  fetchUserPosts: async (username) => {
    try {
      let user = await Users.findOne({ where: { username: username } });
      let photos = await Posts.findAll({ where: { user_id: user.id, type: 0 } });
      let videos = await Posts.findAll({ where: { user_id: user.id, type: 1 } });

      return photos.concat(videos).map(async (post) => {
        post.dataValues.comments = await util.findComments(post.id);
        console.log(post.dataValues);
        return post.dataValues;
      });
    } catch (err) {
      return err;
    }
  },
  removePost: async (id) => {
    try {
      await util.removeComments(id);
      await Posts.destroy({ where: { id: id } });
    } catch (err) {
      throw err;
    }
  },
  updatePost: (id, data) => {
    return Posts.update(data, { where: { id: id } });
  }
};