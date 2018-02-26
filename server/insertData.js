const Users = require('./db/postgresql/models/users.js');
const Posts = require('./db/postgresql/models/posts.js');
const Likes = require('./db/postgresql/models/likes.js');
const FollowingsFollowers = require('./db/postgresql/models/followingsFollowers.js');
const usersData = require('../data/users.json');
const postsData = require('../data/posts.json');
const likesData = require('../data/likes.json');
const followingsFollowersData = require('../data/followingsFollowers.json');

// Users.destroy({ where: {} })
//   .then(() => {
//     Posts.destroy({ where: {} })
//       .then(() => {
//         Likes.destroy({ where: {} })
//           .then(() => {
//             FollowingsFollowers.destroy({ where: {} })
//               .then(() => {
//                 console.log('done');
//               })
//           })
//       })
//   })
//   .catch(() => {
//     console.log('error destroying data');
//   });

// Users.bulkCreate(usersData)
//   .then(() => {
//     console.log('users');
//     Posts.bulkCreate(postsData)
//       .then(() => {
//         console.log('posts');
//         Likes.bulkCreate(likesData)
//           .then(() => {
//             console.log('likes');
//             FollowingsFollowers.bulkCreate(followingsFollowersData)
//               .then(() => {
//                 console.log('done writing data');
//               });
//           });
//       });
//   })
//   .catch(() => {
//     console.log('error writing data');
//   });

// usersData.forEach((data, index) => {
//   Users.create(data)
//     .then(() => {
//       console.log('user:', usersData.length - index);
//     })
//     .catch(() => {
//       console.log('error user:', usersData.length - index);
//     });
// });

// postsData.forEach((data, index) => {
//   Posts.create(data)
//     .then(() => {
//       console.log('post:', postsData.length - index);
//     })
//     .catch(() => {
//       console.log('error post:', postsData.length - index);
//     });
// });

// likesData.forEach((data, index) => {
//   Likes.create(data)
//     .then(() => {
//       console.log('like:', likesData.length - index);
//     })
//     .catch(() => {
//       console.log('error like:', likesData.length - index);
//     });
// });

// followingsFollowersData.forEach((data, index) => {
//   FollowingsFollowers.create(data)
//     .then(() => {
//       console.log('followingsFollower:', followingsFollowersData.length - index);
//     })
//     .catch(() => {
//       console.log('error followingsFollower:', followingsFollowersData.length - index);
//     });
// });