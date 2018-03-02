const Users = require('../db/models/users.js');
const Posts = require('../db/models/posts.js');
const postsController = require('./postsController.js');
const Likes = require('../db/models/likes.js');
const FollowingsFollowers = require('../db/models/followingsFollowers.js');

module.exports = {
  addUser: (user) => {
    return Users.create(user);
  },
  fetchUserInfo: (username) => {
    return Users.findOne({ where: { username: username } });
  },
  removeUser: async (username) => {
    try {
      let { id } = await Users.findOne({ where: { username: username } })
      console.log(id);
      Users.destroy({ where: { id: id } });
      let posts = await Posts.findAll({ where: { user_id: id } })
      posts.forEach((post) => {
        postsController.removePost(post.id);
      });
      Likes.destroy({ where: { user_id: id } });
      FollowingsFollowers.destroy({ where: { following_id: id } });
      return FollowingsFollowers.destroy({ where: { follower_id: id } });
    } catch (err) {
      console.log('error');
      return err;
    }
  },
  updateUser: (username, data) => {
    return Users.update(data, { where: { username: username } });
  }
};