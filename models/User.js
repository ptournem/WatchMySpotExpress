const connection = require('../utils/Connection');
const Sequelize = require('sequelize');

const User = connection.define('user', {
  id:  {
    type : Sequelize.INTEGER,
    primaryKey : true,
    autoIncrement: true,
  },
  pseudo : Sequelize.STRING,
  email: Sequelize.STRING,
  password : Sequelize.STRING
},{
  timestamps : false, 
});

module.exports = User;
