const router = require('express').Router();
const usersController = require('./controllers/usersController.js');
const postsController = require('./controllers/postsController.js');
const likesController = require('./controllers/likesController.js');
const followingsFollowersController = require('./controllers/followingsFollowersController.js');

router.route('/user')
  .post((req, res) => {
    usersController.addUser(req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .get((req, res) => {
    usersController.fetchUserInfo(req.query.username)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .delete((req, res) => {
    usersController.removeUser(req.body.username)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .put((req, res) => {
    usersController.updateUser(req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  });

router.route('/post')
  .post((req, res) => {
    postsController.addPost(req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .get((req, res) => {
    postsController.fetchPostInfo(req.query.id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .delete((req, res) => {
    postsController.removePost(req.body.id)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .put((req, res) => {
    postsController.updatePost(req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  });

router.route('/like')
  .post((req, res) => {
    likesController.addLike(req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .delete((req, res) => {
    likesController.removeLike(req.body.id)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  });

router.route('/follow')
  .post((req, res) => {
    followingsFollowersController.addFollower(req.body.follower)
      .then(() => {
        followingsFollowersController.addFollowing(req.body.following)
          .then(() => {
            res.sendStatus(200);
          });
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .get((req, res) => {
    followingsFollowersController.fetchUserFollowers(req.query.username)
      .then((followers) => {
        followingsFollowersController.fetchUserFollowings(req.query.username)
          .then((followings) => {
            let data = {
              follower: followers,
              following: followings
            };

            res.send(data);
          })
      })
      .catch(() => {
        res.sendStatus(500);
      });
  })
  .remove((req, res) => {
    followingsFollowersController.removeFollower(req.body)
      .then(() => {
        followingsFollowersController.removeFollowing(req.body)
          .then(() => {
            res.sendStatus(200);
          });
      })
      .catch((err) => {
        res.sendStatus(500);
      })
  });

module.exports = router;