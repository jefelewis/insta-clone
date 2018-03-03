const Sequelize = require('sequelize');
const Users = require('./users.js');
const db = require('../db.js');

const Posts = db.define('posts', {
  type: Sequelize.INTEGER,
  body: Sequelize.STRING,
  likesCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

Posts.belongsTo(Users, { foreignKey: 'user_id' });
Posts.belongsTo(Posts, { foreignKey: 'parent_id' });

module.exports = Posts;