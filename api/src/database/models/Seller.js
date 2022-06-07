const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'seller',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      reputation: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: true
        }
      },
      opinions:{
        type:DataTypes.INTEGER
      }
    },
    {
      timestamps: false
    }
  );
};
