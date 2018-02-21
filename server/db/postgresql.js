const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'greenField',
  'thegram',
  'topshelf',
  {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 4,
      min: 0
    }
  });

const Users = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  }
  username: {
    type: Sequelize.STRING,
    unique: true
  }
  bio: Sequelize.STRING,
  profile_picture: Sequelize.STRING
});

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