const Posts = require('../db/models/posts.js');
const Users = require('../db/models/users.js');
const Likes = require('../db/models/likes.js');
const util = require('../helpers/util.js');

module.exports = {
  addPost: async (username, post) => {
    try {
      let user = await Users.findOne({ where: { username: username } });
      post.user_id = user.id;
      await Posts.create(post);
    } catch (err) {
      throw err;
    }
  },
  fetchUserPosts: async (username) => {
    try {
      let data = [];
      let user = await Users.findOne({ where: { username: username } });
      let photos = await Posts.findAll({ where: { user_id: user.id, type: 0 } });
      let videos = await Posts.findAll({ where: { user_id: user.id, type: 1 } });
      let posts = photos.concat(videos);
      
      for (let i = 0; i < posts.length; i++) {
        posts[i].dataValues.comments = await util.findCommentsOfPost(posts[i].id);
        data.push(posts[i].dataValues);
      }
      
      return data;
    } catch (err) {
      throw err;
    }
  },
  removePost: async (id) => {
    try {
      await util.removeComments(id);
      await Likes.destroy({ where: { post_id: id } });
      await Posts.destroy({ where: { id: id } });
    } catch (err) {
      throw err;
    }
  },
  updatePost: async (id, data) => {
    let post = await Posts.findOne({ where: { id: id } });
    
    if (post) {
      await Posts.update(data, { where: { id: id } });
    } else {
      throw null;
    }
  }
};