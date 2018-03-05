const db = require('./db.js');
const Users = require('./models/users.js');
const Posts = require('./models/posts.js');
const Likes = require('./models/likes.js');
const FollowingsFollowers = require('./models/followingsfollowers.js');

db.sync()
  .then(() => {
    console.log('db synced');
  })
  .catch(() => {
    console.log('error syncing db');
  });