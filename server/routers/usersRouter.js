const router = require('express').Router();
const usersController = require('../controllers/usersController.js');

router.route('/')
  .post((req, res) => {
    usersController.addUser(req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  })
  .get((req, res) => {
    usersController.fetchUserInfo(req.query.username)
      .then((data) => {
        res.send(data);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  })
  .delete((req, res) => {
    usersController.removeUser(req.body.username)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  })
  .put((req, res) => {
    usersController.updateUser(req.body.username, req.body.data)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(500);
      })
  });

module.exports = router;