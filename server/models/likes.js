const Sequelize = require('sequelize');
const sequelize = require('../db/postgresql.js');
const Posts = require('./posts.js');
const Users = require('./users.js');

let Likes;

const defineLikes = () => {
  return new Promise((resolve, reject) => {
    Likes = sequelize.define('likes', {});
  });
};

defineLikes()
  .then(() => {
    Likes.belongsTo(Posts);
    Likes.belongsTo(Users);
  })
  .catch(() => {
    console.log('watuuup');
  });

module.exports = Likes;