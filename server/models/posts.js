const Sequelize = require('sequelize');
const sequelize = require('../db/postgresql.js');
const Users = require('./users.js');

let Posts;

const definePosts = () => {
  return new Promise((reject, resolve) => {
    Posts = sequelize.define('posts', {
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
  });
};

definePosts()
  .then(() => {
    Posts.belongsTo(Users);
    Posts.belongsTo(Posts);
  })
  .catch(() => {
    console.log('wazgoinon');
  });

module.exports = Posts;