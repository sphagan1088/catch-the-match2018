// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
// var Sequelize = require('sequelize');
// sequelize (lowercase) references my connection to the DB.
// var sequelize = require('../config/connection.js');
module.exports=function(sequelize, DataTypes) {
// Creates a 'Book' model that matches up with DB
var User = sequelize.define('user_tbl', {
  user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true
  },  
    user_last_name: {
    type: DataTypes.STRING
  },
  user_first_name: {
    type: DataTypes.STRING
  },
  user_email: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
// User.sync();
return User;
}

// Makes the User Model available for other files (will also create a table)
