const Sequelize = require('sequelize');
const db = require('../db.js');

const Users = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    unique: true
  },
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  bio: Sequelize.STRING,
  profile_picture: Sequelize.STRING
});

module.exports = Users;