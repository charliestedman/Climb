const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      
      name: { 
          type: DataTypes.CHAR,
      },
      
      state_id: { 
          type: DataTypes.INTEGER,
          references: {
            model: 'state',
            key: 'id',
          }
      },
    },{
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'location',

    }
  );

  module.exports = Location;