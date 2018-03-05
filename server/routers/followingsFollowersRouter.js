const router = require('express').Router();
const followingsFollowersController = require('../controllers/followingsFollowersController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      console.log(req.body)
      await followingsFollowersController.addFollowingFollower(req.body);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    try {
      let followings = await followingsFollowersController.fetchUserFollowings(req.query.username);
      let followers = await followingsFollowersController.fetchUserFollowers(req.query.username);
      
      res.send({
        followings: followings,
        followers: followers
      });  
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    try {
      await followingsFollowersController.removeFollowingFollower(req.body);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });

module.exports = router;