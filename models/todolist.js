'use strict';
module.exports = function(sequelize, DataTypes) {
  var ToDoList = sequelize.define('ToDoList', {
    username: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ToDoList;
};