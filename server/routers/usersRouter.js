const router = require('express').Router();
const usersController = require('../controllers/usersController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await usersController.addUser(req.body);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    try {
      let data = await usersController.fetchUserInfo(req.query.username);
      res.send(data);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    try {
      console.log(req.body);
      await usersController.removeUser(req.body.username);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .put(async (req, res) => {
    try {
      await usersController.updateUser(req.body.username, req.body.data);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });

module.exports = router;