const Users = require('../db/models/users.js');
const Posts = require('../db/models/posts.js');
const Likes = require('../db/models/likes.js');
const FollowingsFollowers = require('../db/models/followingsFollowers.js');

module.exports = {
  addUser: (user) => {
    return Users.create(user);
  },
  fetchUserInfo: (username) => {
    return Users.findOne({ where: { username: username } });
  },
  removeUser: (username) => {
    return Users.findOne({ where: { username: username } })
      .then(({ user_id }) => {
        Users.destroy({ where: { id: user_id } });
        Posts.destroy({ where: { user_id: user_id } });
        Likes.destroy({ where: { user_id: user_id } });
        FollowingsFollowers.destroy({ where: { following_id: user_id } });
        FollowingsFollowers.destroy({ where: { follower_id: user_id } });
      });
  },
  updateUser: (username, data) => {
    return Users.update(data, { where: { username: username } });
  }
};