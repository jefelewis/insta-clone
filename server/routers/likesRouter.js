const router = require('express').Router();
const likesController = require('../controllers/likesController.js');

router.route('/')
  .post((req, res) => {
    likesController.addLike(req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  })
  .delete((req, res) => {
    likesController.removeLike(req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  });

module.exports = router;