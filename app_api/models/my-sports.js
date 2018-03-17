// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require('sequelize');
// sequelize (lowercase) references my connection to the DB.
// var sequelize = require('../config/connection`.js');
module.exports=function(sequelize, DataTypes) {
// Creates a "MySports" model that matches up with DB
var MySports = sequelize.define('my_sports_tbl', {
  my_sports_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },  
    my_sports_api_id: {
    type: DataTypes.STRING
  },
  my_sports_user_id: {
    type: DataTypes.INTEGER
  },
  my_sports_type: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
// MySports.sync();
return MySports;
}

// Makes the MySports Model available for other files (will also create a table)

