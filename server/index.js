const express = require('express');
const app = express();
const router = require('./router.js');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/public/')));
app.use('/api', router);

const port = 9001;

app.listen(port, () => {
  console.log('Server has started on port: ' + port);
});
