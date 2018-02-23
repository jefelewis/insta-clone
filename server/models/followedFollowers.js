const Sequelize = require('sequelize');
const sequelize = require('../db/postgresql.js');
const Users = require('./users.js');

let FollowedFollowers;

const defineFollowedFollowers = () => {
  return new Promise((reject, resolve) => {
    FollowedFollowers = sequelize.define('followedFollowers', {});
  });
};

defineFollowedFollowers()
  .then(() => {
    FollowedFollowers.belongsTo(Users);
    FollowedFollowers.belongsTo(Users);
  })
  .catch(() => {
    console.log('aint no thang');
  });

module.exports = FollowedFollowers;