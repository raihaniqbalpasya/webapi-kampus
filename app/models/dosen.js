"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dosen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dosen.init(
    {
      namaDosen: DataTypes.STRING,
      nidn: DataTypes.INTEGER,
      dosenFakultas: DataTypes.STRING,
      umurDosen: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Dosen",
    }
  );
  return Dosen;
};
