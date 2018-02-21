// Requirements: Establish Router
const router = require('express').Router();

// Requirements: Controllers
const databaseController = require('./controllers/databaseController');


// Routes
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/public/index.html'));
});

router.get('/bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/public/bundle.js'));
});


// Exports: Router
module.exports = router;
