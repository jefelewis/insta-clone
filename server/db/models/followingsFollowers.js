const Sequelize = require('sequelize');
const db = require('../db.js');

const FollowingsFollowers = db.define('followings_followers', {});

module.exports = FollowingsFollowers;