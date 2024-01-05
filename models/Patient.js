
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }


  }
  Patient.init({
    fullName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true

    },
    bloodGroup: {
      type: DataTypes.STRING
    },

    age: {
      type: DataTypes.STRING
    },

    gender: {
      allowNull: false,

      type: DataTypes.STRING
    },
    insuranceId: {
      allowNull: false,

      type: DataTypes.STRING

    }



  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};