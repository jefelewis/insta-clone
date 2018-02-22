const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://bxthcohs:zeNJpa1BQgx7vWSa8ZGn-8yDl3YaP6FC@hanno.db.elephantsql.com:5432/bxthcohs');

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

const Posts = sequelize.define('posts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  type: Sequelize.STRING,
  body: Sequelize.STRING,
  user_id: Sequelize.INTEGER,
});

Posts.belongsTo(Users, {foreignKey: 'user_id'});

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