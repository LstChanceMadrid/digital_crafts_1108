'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

  return queryInterface.addColumn(
      'items',
      'storeid',{
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {  // foreign key part
          model : 'stores',  // references posts table
          key : 'id'  // primary key in the posts table
        }
      }
    )

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(
      'items',
      'storeid'
    )

  }
};