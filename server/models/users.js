const Sequelize = require('sequelize');
const sequelize = require('../db/postgresql.js');

let Users;

const defineUsers = () => {
  return new Promise((reject, resolve) => {
    Users = sequelize.define('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      username: {
        type: Sequelize.STRING,
        unique: true
      },
      bio: Sequelize.STRING,
      profile_picture: Sequelize.STRING
    });
  });
};

defineUsers()
  .then(() => {
    console.log(Users);
  })
  .catch(() => {
    console.log('waduup');
  });

module.exports = Users;