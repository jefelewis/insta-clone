const Likes = require('../db/models/likes.js');
const Posts = require('../db/models/posts.js');

module.exports = {
  addLike: async (like) => {
    let [ data, created ] = await Likes.findOrCreate({ where: like });
    
    if (created) {
      await Posts.increment('likesCount', { where: { id: like.post_id } });
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