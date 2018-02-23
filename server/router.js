const path = require('path');
const router = require('express').Router();
const mongooseController = require('./controllers/mongooseController.js');
const postgresqlController = require('./controllers/postgresqlController.js');

router.route('/')
  .get((req, res) => {
    res.sendFile(path.join(__dirname + '/../client/public/index.html'));
  });

router.route('/bundle.js')
  .get((req, res) => {
    res.sendFile(path.join(__dirname + '/../client/public/bundle.js'));
  });

module.exports = router;