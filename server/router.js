// Requirements: Establish Router
const path = require('path');
const router = require('express').Router();


// Requirements: Controllers
const mongooseController = require('./controllers/mongooseController');


// Routes
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/public/index.html'));
});

router.get('/bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/public/bundle.js'));
});

// router.get('*', function(req, res) {
//   res.sendFile(path.resolve(__dirname, '/../client/public', 'index.html'))
// })

// Exports: Router
module.exports = router;
