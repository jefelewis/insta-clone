const Users = require('../db/models/users.js');

module.exports = {
  addUser: (req, res) => {
    return Users.create(req.body);
  },
  fetchUserInfo: (req, res) => {
    
  },
  removeUser: (req, res) => {

  },
  updateUser: (req, res) => {

  },
  findUser: (req, res) => {

  }
};