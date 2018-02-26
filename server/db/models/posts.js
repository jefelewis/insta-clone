const Sequelize = require('sequelize');
const db = require('../db.js');

const Posts = db.define('posts', {
  type: Sequelize.INTEGER,
  body: Sequelize.STRING,
  likesCount: Sequelize.INTEGER
});

module.exports = Posts;