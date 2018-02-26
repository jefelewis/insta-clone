const router = require('express').Router();
const usersController = require('./controllers/usersController.js');
const postsController = require('./controllers/postsController.js');
const likesController = require('./controllers/likesController.js');
const followingsFollowersController = require('./controllers/followingsFollowersController.js');

router.route('/user')
  .post((req, res) => {
    usersController.addUser(req, res)
      .then(() => {

      })
      .catch((err) => {

      });
  })
  .get((req, res) => {
    usersController.fetchUserInfo(req, res)
      .then((data) => {

      })
      .catch((err) => {

      });
  })
  .delete((req, res) => {
    usersController.removeUser(req, res)
      .then(() => {

      })
      .catch((err) => {

      });
  })
  .put((req, res) => {
    usersController.updateUser(req, res)
      .then(() => {

      })
      .catch((err) => {

      });
  });

router.route('/post')
  .post((req, res) => {
    postsController.addPost(req, res)
      .then(() => {

      })
      .catch((err) => {

      });
  })
  .get((req, res) => {
    postsController.fetchPostInfo(req, res)
      .then((data) => {

      })
      .catch((err) => {

      });
  })
  .delete((req, res) => {
    postsController.removePost(req, res)
      .then(() => {

      })
      .catch((err) => {

      });
  })
  .put((req, res) => {
    postsController.updatePost(req, res)
      .then(() => {

      })
      .catch((err) => {

      });
  });

router.route('/like')
  .post((req, res) => {
    likesController.addLike(req, res)
      .then(() => {

      })
      .catch((err) => {

      });
  })
  .delete((req, res) => {
    likesController.removeLike(req, res)
      .then(() => {

      })
      .catch((err) => {

      });
  });

router.route('/follow')
  .post((req, res) => {
    followingsFollowersController.addFollower(req, res)
      .then(() => {
        followingsFollowersController.addFollowing(req, res)
          .then(() => {

          });
      })
      .catch((err) => {

      });
  })
  .get((req, res) => {
    followingsFollowersController.fetchUserFollowers(req, res)
      .then((followers) => {
        followingsFollowersController.fetchUserFollowings(req, res)
          .then((followings) => {

          })
      })
      .catch(() => {

      });
  })
  .remove((req, res) => {
    followingsFollowersController.removeFollower(req, res)
      .then(() => {
        followingsFollowersController.removeFollowing(req, res)
          .then(() => {

          });
      })
      .catch((err) => {

      })
  });

module.exports = router;