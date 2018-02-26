const path = require('path');
const router = require('express').Router();
const usersController = require('./controllers/usersController.js');
const postsController = require('./controllers/postsController.js');
const likesController = require('./controllers/likesController.js');
const followingsFollowersController = require('./controllers/followingsFollowersController.js');



module.exports = router;