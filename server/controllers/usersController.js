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
      .then(({ id }) => {
        Users.destroy({ where: { id: id } });
        Posts.destroy({ where: { user_id: id } });
        Likes.destroy({ where: { user_id: id } });
        FollowingsFollowers.destroy({ where: { following_id: id } });
        FollowingsFollowers.destroy({ where: { follower_id: id } });
      });
  },
  updateUser: (username, data) => {
    return Users.update(data, { where: { username: username } });
  }
};