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
    console.log('done writing users data');
    Posts.bulkCreate(postsData)
      .then(() => {
        console.log('done writing posts data');
        Likes.bulkCreate(likesData)
          .then(() => {
            console.log('done writing likes data');
            FollowingsFollowers.bulkCreate(followingsFollowersData)
              .then(() => {
                console.log('done writing all data');
              });
          });
      });
  })
  .catch(() => {
    console.log('error writing data');
  });