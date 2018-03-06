const Likes = require('../db/models/likes.js');
const Posts = require('../db/models/posts.js');
const Users = require('../db/models/users.js');

module.exports = {
  addLike: async (username, postId) => {
    let { id } = await Users.findOne({ where: { username: username } });
    console.log('this is his id:', id);
    let [ data, created ] = await Likes.findOrCreate({ where: { post_id: postId, user_id: id } });
    console.log('data:', data);
    console.log('created:', created);
    if (created) {
      await Posts.increment('likesCount', { where: { id: postId } });
      console.log('incremented');
    } else {
      throw null;
    }
  },
  removeLike: async (like) => {
    try {
      let destroyed = await Likes.destroy({ where: like });
      
      if (!destroyed) {
        throw null;
      }
      
      let post = await Posts.findOne({ where: { id: like.post_id } });
      await post.decrement('likesCount');
    } catch (err) {
      throw err;
    }
  }
};