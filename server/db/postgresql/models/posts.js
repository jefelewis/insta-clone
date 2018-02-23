const Sequelize = require('sequelize');
const db = require('../db.js');

const Posts = db.define('posts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  type: Sequelize.INTEGER,
  body: Sequelize.STRING,
  likesCount: Sequelize.INTEGER
});

module.exports = Posts;