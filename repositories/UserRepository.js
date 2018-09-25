const Sequelize = require('sequelize');
const User = require('../models/User');

const UserRepository = {
  attemptLogin : async function(email,password) {
    console.log("begin repo attemptLogin");
    console.log( email);
    console.log( password);
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
