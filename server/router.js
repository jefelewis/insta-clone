const router = require('express').Router();
const usersRouter = require('./routers/usersRouter.js');
const postsRouter = require('./routers/postsRouter.js');
const likesRouter = require('./routers/likesRouter.js');
const followingsFollowersRouter = require('./routers/followingsFollowersRouter.js');
const Users = require('./db/models/users.js');
const postsController = require('./controllers/postsController.js');
const followingsFollowersController = require('./controllers/followingsFollowersController.js');

router.use('/user', usersRouter);
router.use('/post', postsRouter);
router.use('/like', likesRouter);
router.use('/follow', followingsFollowersRouter);

router.get('/users', async (req, res) => {
  try {
    let posts = [];
    let users = await Users.findAll();
    
    for (let i = 0; i < users.length; i++) {
      let userPosts = await postsController.fetchUserPosts(users[i].username);
      posts = posts.concat(userPosts);
    }
    
    posts = posts.sort((a, b) => {
      return b.id - a.id;
    });
    
    res.send(posts);
  } catch (err) {
    res.sendStatus(500);
  }
});

router.get('/following', async (req, res) => {
  try {
    let posts = [];
    let followings = await followingsFollowersController.fetchUserFollowings(req.query.username);

    for (let i = 0; i < followings.length; i++) {
      let userPosts = await postsController.fetchUserPosts(followings[i].username);
      posts = posts.concat(userPosts);
    }

    posts = posts.sort((a, b) => {
      return b.id - a.id;
    });

    res.send(posts);
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = router;