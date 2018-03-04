const router = require('express').Router();
const postsController = require('../controllers/postsController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await postsController.addPost(req.body.username, req.body.data);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    try {
      let data = await postsController.fetchUserPosts(req.query.username);
      res.send(data);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    try {
      await postsController.removePost(req.body.id);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .put(async (req, res) => {
    try {
      await postsController.updatePost(req.body.id, req.body.data);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });

module.exports = router;