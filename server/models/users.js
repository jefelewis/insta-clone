const sequelize = require('../db/postgresql.js');

const Users = sequelize.define('users', {
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