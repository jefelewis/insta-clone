const router = require('express').Router();
const usersController = require('./controllers/usersController.js');
const postsController = require('./controllers/postsController.js');
const likesController = require('./controllers/likesController.js');
const followingsFollowersController = require('./controllers/followingsFollowersController.js');

router.route('/user')
  .post((req, res) => {
    usersController.addUser(req, res)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .get((req, res) => {
    usersController.fetchUserInfo(req, res)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .delete((req, res) => {
    usersController.removeUser(req, res)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .put((req, res) => {
    usersController.updateUser(req, res)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  });

router.route('/post')
  .post((req, res) => {
    postsController.addPost(req, res)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .get((req, res) => {
    postsController.fetchPostInfo(req, res)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .delete((req, res) => {
    postsController.removePost(req, res)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .put((req, res) => {
    postsController.updatePost(req, res)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  });

router.route('/like')
  .post((req, res) => {
    likesController.addLike(req, res)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .delete((req, res) => {
    likesController.removeLike(req, res)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  });

router.route('/follow')
  .post((req, res) => {
    followingsFollowersController.addFollower(req, res)
      .then(() => {
        followingsFollowersController.addFollowing(req, res)
          .then(() => {
            res.sendStatus(200);
          });
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  })
  .get((req, res) => {
    followingsFollowersController.fetchUserFollowers(req, res)
      .then((followers) => {
        followingsFollowersController.fetchUserFollowings(req, res)
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
    followingsFollowersController.removeFollower(req, res)
      .then(() => {
        followingsFollowersController.removeFollowing(req, res)
          .then(() => {
            res.sendStatus(200);
          });
      })
      .catch((err) => {
        res.sendStatus(500);
      })
  });

module.exports = router;