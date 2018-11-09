'use strict';
module.exports = (sequelize, DataTypes) => {
  const store = sequelize.define('store', {
    name: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {});
  store.associate = function(models) {
    store.hasMany(models.item, {as : 'items', foreignKey : 'storeid'});
    // associations can be defined here
  };
  return store;
};