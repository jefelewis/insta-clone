const db = require('./db.js');

db.sync({ force: true })
  .then(() => {
    console.log('db synced');
  })
  .catch(() => {
    console.log('error syncing db');
  });