const express = require('express');
const app = express();
const router = require('./router.js');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/public/')));
app.use('/', router);

<<<<<<< 2d649c7bdbd49bbfc7eec7d6596e9e32ef461daa
=======
// Use: Static Files
<<<<<<< f6d86130a071d563f6ee7a725e79d9fe8428d41b
app.use(express.static(path.join(__dirname, '../client/public/')));
=======
app.use('/', express.static(path.join(__dirname, '../client/public')));
>>>>>>> Working Log In, No Dynamic Render

// Use: Router
app.use(router);


// Listener
>>>>>>> Working Log In, No Dynamic Render
const port = 9001;

app.listen(port, function() {
  console.log('Server has started on port: ' + port);
});