'use strict';
const bcrypt = require('bcrypt');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.belongsToMany(models.Role, {
        through: 'userRole',
        as: 'roles',
        foreignKey: 'userId'
      });
    }
  };
  User.init({
    email:{
      type:DataTypes.STRING,
      validate: {isEmail: true,
      }
    },
    password: DataTypes.STRING,
    fullname:{
      type:DataTypes.STRING,
      validate: {
      }
    },
   
  }, {
    sequelize,
    modelName: 'User',
  });
  User.addHook('beforeCreate', (user, options) => {
    user.password = bcrypt.hashSync(user.password, 10);
  });
  User.addHook('afterCreate', (user, options) => {
    user.addRole([1]);
  });

  return User;
};