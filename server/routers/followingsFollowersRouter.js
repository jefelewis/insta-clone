const router = require('express').Router();
const followingsFollowersController = require('../controllers/followingsFollowersController.js');

router.route('/')
  .post((req, res) => {
    followingsFollowersController.addFollowing(req.body.following)
      .then(() => {
        followingsFollowersController.addFollower(req.body.follower)
          .then(() => {
            res.sendStatus(200);
          });
      })
      .catch(() => {
        res.sendStatus(500);
      });
  })
  .get((req, res) => {
    followingsFollowersController.fetchUserFollowings(req.query.username)
      .then((followers) => {
        followingsFollowersController.fetchUserFollowers(req.query.username)
          .then((followings) => {
            res.send({
              followers: followers,
              followings: followings
            });
          });
      })
      .catch(() => {
        res.sendStatus(500);
      });
  })
  .delete((req, res) => {
    followingsFollowersController.removeFollowing(req.body.following)
      .then(() => {
        followingsFollowersController.removeFollower(req.body.follower)
          .then(() => {
            res.sendStatus(200);
          });
      })
      .catch(() => {
        res.sendStatus(500);
      });
  });

module.exports = router;