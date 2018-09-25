const Sequelize = require("sequelize");
const sequelize = new Sequelize('watchmyspot', 'root',null,{
    host : 'localhost',
    port : 3307,
    dialect : 'mysql',
    operatorAliases: false
  });

module.exports = sequelize;
