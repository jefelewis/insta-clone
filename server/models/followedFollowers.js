const sequelize = require('../db/postgresql.js');
const Users = require('./users.js');

const FollowedFollowers = sequelize.define('followedFollowers', {
  followed_id: Sequelize.INTEGER,
  follower_id: Sequelize.INTEGER
});

FollowedFollowers.belongsTo(Users, {foreignKey: followed_id});
FollowedFollowers.belongsTo(Users, {foreignKey: follower_id});