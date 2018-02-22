const sequelize = require('../db/postgresql.js');
const Users = require('./users.js');

const Posts = sequelize.define('posts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  type: Sequelize.STRING,
  body: Sequelize.STRING,
  likesCount: Sequelize.INTEGER,
  user_id: Sequelize.INTEGER,
  parent_id: Sequelize.INTEGER
});

Posts.belongsTo(Users, {foreignKey: 'user_id'});
Posts.belongsTo(Posts, {foreignKey: 'parent_id'});