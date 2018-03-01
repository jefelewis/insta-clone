const db = require('./db.js');
const Users = require('./models/users.js');
const Posts = require('./models/posts.js');
const Likes = require('./models/likes.js');
const FollowingsFollowers = require('./models/followingsFollowers.js');

// Posts.belongsTo(Users, { foreignKey: 'user_id' });
Users.hasMany(Posts, { foreignKey: 'user_id' });
// Posts.belongsTo(Posts, { foreignKey: 'parent_id' });
Posts.hasMany(Posts, { foreignKey: 'parent_id' });
// Likes.belongsTo(Posts, { foreignKey: 'post_id' });
Posts.hasMany(Likes, { foreignKey: 'post_id' });
// Likes.belongsTo(Users, { foreignKey: 'user_id' });
Users.hasMany(Likes, { foreignKey: 'user_id' });
// FollowingsFollowers.belongsTo(Users, { foreignKey: 'following_id' });
Users.hasMany(FollowingsFollowers, { foreignKey: 'following_id' });
// FollowingsFollowers.belongsTo(Users, { foreignKey: 'follower_id' });
Users.hasMany(FollowingsFollowers, { foreignKey: 'follower_id' });

db.sync({ force: true })
  .then(() => {
    console.log('db synced');
  })
  .catch(() => {
    console.log('error syncing db');
  });