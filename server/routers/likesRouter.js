const router = require('express').Router();
const likesController = require('../controllers/likesController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await likesController.addLike(req.body);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    try {
      await likesController.removeLike(req.body);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });

module.exports = router;