const sequelize = require('../db/postgresql.js');
const Users = require('./users.js');

const FollowedFollower = sequelize.define('followedFollower', {
  followed_id: Sequelize.INTEGER,
  follower_id: Sequelize.INTEGER
});

FollowedFollower.belongsTo(Users, {foreignKey: followed_id});
FollowedFollower.belongsTo(Users, {foreignKey: follower_id});