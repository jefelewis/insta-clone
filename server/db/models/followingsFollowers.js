const Sequelize = require('sequelize');
const Users = require('./users.js');
const db = require('../db.js');

const FollowingsFollowers = db.define('followings_followers', {});

FollowingsFollowers.belongsTo(Users, { foreignKey: 'following_id' });
FollowingsFollowers.belongsTo(Users, { foreignKey: 'follower_id' });

module.exports = FollowingsFollowers;