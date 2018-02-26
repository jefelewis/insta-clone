const Sequelize = require('sequelize');
const db = require('../db.js');

const Likes = db.define('likes', {});

module.exports = Likes;