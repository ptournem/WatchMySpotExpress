const Sequelize = require('sequelize');
const User = require('../models/User');

const UserRepository = {
  attemptLogin : async function(email,password) {
    const users = await User.findAll({
      where : {
        email,
        password
      }
    })

    return (users.length == 1);
  }
}

module.exports = UserRepository;
