const router = require('express').Router();
const followingsFollowersController = require('../controllers/followingsFollowersController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await followingsFollowersController.addFollowing(req.body.following);
      await followingsFollowersController.addFollower(req.body.follower);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    try {
      let followers = await followingsFollowersController.fetchUserFollowings(req.query.username);
      let followings = await followingsFollowersController.fetchUserFollowers(req.query.username);
      
      res.send({
        followers: followers,
        followings: followings
      });  
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    try {
      await followingsFollowersController.removeFollowing(req.body.following);
      await followingsFollowersController.removeFollower(req.body.follower);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });

module.exports = router;