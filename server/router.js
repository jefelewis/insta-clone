const router = require('express').Router();
const usersRouter = require('./routers/usersRouter.js');
const postsRouter = require('./routers/postsRouter.js');
const likesRouter = require('./routers/likesRouter.js');
const followingsFollowersRouter = require('./routers/followingsFollowersRouter.js');

router.use('/user', usersRouter);
router.use('/post', postsRouter);
router.use('/like', likesRouter);
router.use('/follow', followingsFollowersRouter);

module.exports = router;