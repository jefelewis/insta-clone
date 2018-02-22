const Users = require('./models/users.js');
const Posts = require('./models/posts.js');
const Likes = require('./models/likes.js');
const FollowedFollowers = require('./models/followedFollowers.js');
const fs = require('fs');
const path = require('path');

const readFile = (model, name) => {
  return new Promise ((reject, resolve) => {
    fs.readFile(path.join(__dirname, `../data/${name}.json`))
      .then((data) => {
        let result = JSON.stringify(data);
        result = JSON.parse(result);
    
        model.bulkCreate(result)
          .then(() => {
            console.log(`${name} created`);
          })
          .catch(() => {
            console.log(`error creating ${name}`);
          });
      })
      .catch(() => {
        console.log(`error reading ${name}`);
      });
  });
};

readFile(Users, 'users')
  .then(() => {
    readFile(Posts, 'posts')
      .then(() => {
        readFile(Likes, 'likes')
          .then(() => {
            readFile(FollowedFollowers, 'followedFollowers')
              .then(() => {
                console.log('done creating everything');
              });
          });
      });
  })
  .catch(() => {
    console.log('error');
  });