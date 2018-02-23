const db = require('./db.js');
const Users = require('./models/users.js');
const Posts = require('./models/posts.js');
const Likes = require('./models/likes.js');
const FollowedFollowers = require('./models/followedFollowers.js');

Posts.belongsTo(Users, { foreignKey: 'user_id' });
Posts.belongsTo(Posts, { foreignKey: 'parent_id' });
Likes.belongsTo(Posts, { foreignKey: 'post_id' });
Likes.belongsTo(Users, { foreignKey: 'user_id' });
FollowedFollowers.belongsTo(Users, { foreignKey: 'followed_id' });
FollowedFollowers.belongsTo(Users, { foreignKey: 'follower_id' });

db.sync({ force: true })
  .then(() => {
    console.log('db synced');
  })
  .catch(() => {
    console.log('error syncing db');
  });