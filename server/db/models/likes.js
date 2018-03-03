const Sequelize = require('sequelize');
const Posts = require('./posts.js');
const Users = require('./users.js');
const db = require('../db.js');

const Likes = db.define('likes', {});

Likes.belongsTo(Posts, { foreignKey: 'post_id' });
Likes.belongsTo(Users, { foreignKey: 'user_id' });

module.exports = Likes;