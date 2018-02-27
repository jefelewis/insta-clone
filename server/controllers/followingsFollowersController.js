const FollowingsFollowers = require('../db/models/followingsFollowers.js');
const Users = require('../db/models/users.js');

module.exports = {
  addFollowingFollower: (following, follower) => {
    return new Promise((resolve, reject) => {
      Users.findOne({ where: { username: following } })
        .then((followingUser) => {
          Users.findOne({ where: { username: follower } })
            .then((followerUser) => {
              FollowingsFollowers.create({
                following_id: followingUser.id,
                follower_id: followerUser.id
              })
                .then(() => {
                  resolve();
                });
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  fetchUserFollowings: (username) => {
    return new Promise((resolve, reject) => {
      Users.findOne({ where: { username: username } })
        .then(({ id }) => {
          FollowingsFollowers.findAll({ where: { following_id: id } })
            .then((followings) => {
              resolve(followings);
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  fetchUserFollowers: (username) => {
    return new Promise((resolve, reject) => {
      Users.findOne({ where: { username: username } })
        .then(({ id }) => {
          FollowingsFollowers.findAll({ where: { follower_id: id } })
            .then((followers) => {
              resolve(followers);
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  removeFollowingFollower: (following, follower) => {
    return new Promise((resolve, reject) => {
      Users.findOne({ where: { username: following } })
        .then((followingUser) => {
          Users.findOne({ where: { username: follower } })
            .then((followerUser) => {
              FollowingsFollowers.destroy({
                where: {
                  following_id: followingUserId,
                  follower_id: followerUserId
                }
              })
                .then(() => {
                  resolve();
                });
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};