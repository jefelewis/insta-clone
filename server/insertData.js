const Users = require('./models/users.js');
const Posts = require('./models/posts.js');
const Likes = require('./models/likes.js');
const FollowedFollowers = require('./models/followedFollowers.js');
const fs = require('fs');
const path = require('path');

const writeData = (model, name) => {
  fs.readFile(path.join(__dirname, `../data/${name}.json`), (err, data) => {
    if (err) {
      console.log('error');
    } else {
      let result = JSON.stringify(data);
      result = JSON.parse(result);
      console.log(model, name);
      model.bulkCreate(result)
        .then(() => {
          console.log(`${name} created`);
        })
        .catch(() => {
          console.log(`error creating ${name}`);
        });
    }
  });
};

Users.sync()
  .then(() => {
    writeData(Users, 'users')
    Posts.sync()
      .then(() => {
        writeData(Posts, 'posts')
        Likes.sync()
          .then(() => {
            writeData(Likes, 'likes')
            FollowedFollowers.sync()
              .then(() => {
                writeData(FollowedFollowers, 'followedFollowers');
              });
          });
      });
  })
  .catch(() => {
    console.log('error');
  });