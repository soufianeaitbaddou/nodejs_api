'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Demande extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Demande.init({
    categorieId: DataTypes.INTEGER,
    categorieId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    levelId: DataTypes.INTEGER,
    experienceId: DataTypes.INTEGER,
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    date_naissance: DataTypes.DATE,
    e - mail: DataTypes.STRING,
    adresse: DataTypes.STRING,
    ville: DataTypes.STRING,
    code_postal: DataTypes.INTEGER,
    civilite: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Demande',
  });
  return Demande;
};