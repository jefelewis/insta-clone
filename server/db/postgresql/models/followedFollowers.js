const Sequelize = require('sequelize');
const db = require('../db.js');

const FollowedFollowers = db.define('followedFollowers', {});

module.exports = FollowedFollowers;