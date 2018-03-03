const Users = require('../db/models/users.js');
const Posts = require('../db/models/posts.js');
const postsController = require('./postsController.js');
const Likes = require('../db/models/likes.js');
const FollowingsFollowers = require('../db/models/followingsFollowers.js');

module.exports = {
  addUser: async (user) => {
    try {
      await Users.create(user);
    } catch (err) {
      throw err;
    }
  },
  fetchUserInfo: async (username) => {
    let data = await Users.findOne({ where: { username: username } });
    
    if (data) {
      return data;
    } else {
      throw null;
    }
  },
  removeUser: async (username) => {
    try {
      let { id } = await Users.findOne({ where: { username: username } });
      let posts = await Posts.findAll({ where: { user_id: id } });
      await posts.forEach(async (post) => {
        await postsController.removePost(post.id);
      });
      await Likes.destroy({ where: { user_id: id } });
      await FollowingsFollowers.destroy({ where: { following_id: id } });
      await FollowingsFollowers.destroy({ where: { follower_id: id } });
      await Users.destroy({ where: { id: id } });
    } catch (err) {
      throw err;
    }
  },
  updateUser: async (username, data) => {
    let user = await module.exports.fetchUserInfo(username);

    if (user) {
      await Users.update(data, { where: { username: username } });
    } else {
      throw null;
    }
  }
};