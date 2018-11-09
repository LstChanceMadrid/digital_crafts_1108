'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    itemName: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  item.associate = function(models) {
    // associations can be defined here
    item.belongsTo(models.store,{ as : 'store', foreignKey : 'storeid'})
  };
  return item;
};