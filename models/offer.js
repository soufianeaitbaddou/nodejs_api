'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Offer.belongsTo(models.Categorie, {foreignKey: 'categorieId', as: 'categorie'})
      models.Offer.belongsTo(models.Type, {foreignKey: 'typeId', as: 'type'})
      models.Offer.belongsTo(models.Level, {foreignKey: 'levelId', as: 'level'})
      models.Offer.belongsTo(models.Experience, {foreignKey: 'experienceId', as: 'experience'})
    }
  };
  Offer.init({
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.TEXT,
    categorieId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    levelId: DataTypes.INTEGER,
    experienceId: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'Offer',
  });
  return Offer;
};