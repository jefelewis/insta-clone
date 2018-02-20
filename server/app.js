const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 9001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/public/index.html'));
});
app.get('/bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/public/bundle.js'));
});
app.listen(port);
console.log('We are listening on port', port);