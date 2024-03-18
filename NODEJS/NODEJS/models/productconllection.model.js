module.exports = (sequelize, Sequelize) => {
    const ProductCollection = sequelize.define("productconllection", {
      ProductCode: {
        type: Sequelize.STRING
      },
      ProductName: {
        type: Sequelize.STRING
      },
      ProductData: {
        type: Sequelize.STRING
      },
      ProductOriginPrice: {
        type: Sequelize.STRING
      },
      Quantity: {
        type: Sequelize.INTEGER
      },
      ProductStoreCode: {
        type: Sequelize.STRING
      }

    });

    return ProductCollection;
  };