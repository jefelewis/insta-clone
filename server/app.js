// Requirements: Express
const express = require('express');
const app = express();

// Requirements: Express Router File
const router = require('./router.js');

// Requirements: Middleware
const bodyParser = require('body-parser');
const path = require('path');


// Use: Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Use: Static Files
app.use(express.static(path.join(__dirname, '../client/public')));

// Use: Router
app.use(router);


// Listener
const port = 9001;

app.listen(port, function() {
  console.log('Server has started on port: ' + port);
});
