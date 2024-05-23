

const {DataTypes} = require("sequelize");

const sequelize = require("../utils/database");



// creating schema

// to know that is class
const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
});


module.exports = User;