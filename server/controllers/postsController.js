const Posts = require('../db/models/posts.js');
const Users = require('../db/models/users.js');
const util = require('../helpers/util.js');

module.exports = {
  addPost: (username, post) => {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await Users.findOne({ where: { username: username } });
        post.user_id = user.id;
        await Posts.create(post);
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  },
  fetchUserPosts: async (username) => {
    try {
      let user = await Users.findOne({ where: { username: username } });
      let photos = await Posts.findAll({ where: { user_id: user.id, type: 0 } });
      let videos = await Posts.findAll({ where: { user_id: user.id, type: 1 } });

      return photos.concat(videos).map(async (post) => {
        post.dataValues.comments = await util.findComments(post.id);
        console.log(post.dataValues);
        return post.dataValues;
      });
    } catch (err) {
      return err;
    }
  },
  removePost: (id) => {
    util.removeComments(id);
    return Posts.destroy({ where: { id: id } });
  },
  updatePost: (id, data) => {
    return Posts.update(data, { where: { id: id } });
  }
};