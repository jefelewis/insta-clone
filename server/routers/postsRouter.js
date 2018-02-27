const router = require('express').Router();
const postsController = require('../controllers/postsController.js');

router.route('/')
  .post((req, res) => {
    postsController.addPost(req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  })
  .get((req, res) => {
    postsController.fetchUserPosts(req.query.id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  })
  .delete((req, res) => {
    postsController.removePost(req.body.id)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  })
  .put((req, res) => {
    postsController.updatePost(req.body.id, req.body.data)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  });

module.exports = router;