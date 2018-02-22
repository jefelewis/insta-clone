const sequelize = require('../db/postgresql.js');
const Posts = require('./posts.js');
const Users = require('./users.js');

const Likes = sequelize.define('likes', {
  post_id: Sequelize.INTEGER,
  user_id: Sequelize.INTEGER
});

Likes.belongsTo(Posts, {foreignKey: post_id});
Likes.belongsTo(Users, {foreignKey: user_id});