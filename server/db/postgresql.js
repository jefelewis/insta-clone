const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://bxthcohs:zeNJpa1BQgx7vWSa8ZGn-8yDl3YaP6FC@hanno.db.elephantsql.com:5432/bxthcohs');

const Posts = sequelize.define('posts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  type: Sequelize.STRING,
  body: Sequelize.STRING,
  likesCount: Sequelize.INTEGER,
  user_id: Sequelize.INTEGER,
  parent_id: Sequelize.INTEGER
});

const Users = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  bio: Sequelize.STRING,
  profile_picture: Sequelize.STRING
});

const Likes = sequelize.define('likes', {
  post_id: Sequelize.INTEGER,
  user_id: Sequelize.INTEGER
});

const FollowedFollower = sequelize.define('followedFollower', {
  followed_id: Sequelize.INTEGER,
  follower_id: Sequelize.INTEGER
});

Posts.belongsTo(Users, {foreignKey: 'user_id'});
Posts.belongsTo(Posts, {foreignKey: 'parent_id'});
Likes.belongsTo(Posts, {foreignKey: post_id});
Likes.belongsTo(Users, {foreignKey: user_id});
FollowedFollower.belongsTo(Users, {foreignKey: followed_id});
FollowedFollower.belongsTo(Users, {foreignKey: follower_id});

// User.sync({ force: true })
//   .then(() => {
//     return User.create({
//       username: 'testUser',
//       firstName: 'Test',
//       lastName: 'User'
//     })
//   });

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });