const Users = require('./db/models/users.js');
const Posts = require('./db/models/posts.js');
const Likes = require('./db/models/likes.js');
const FollowingsFollowers = require('./db/models/followingsFollowers.js');
const usersData = require('../data/users.json');
const postsData = require('../data/posts.json');
const likesData = require('../data/likes.json');
const followingsFollowersData = require('../data/followingsFollowers.json');

Users.bulkCreate(usersData)
  .then(() => {
    Posts.bulkCreate(postsData)
      .then(() => {
        Likes.bulkCreate(likesData)
          .then(() => {
            FollowingsFollowers.bulkCreate(followingsFollowersData)
              .then(() => {
                console.log('done inserting data');
              });
          });
      });
  })
  .catch((err) => {
    throw err;
  });