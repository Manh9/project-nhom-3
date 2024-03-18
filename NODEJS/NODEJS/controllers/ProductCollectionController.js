const db = require("../models");
const ProductCollection = db.ProductCollection;
const Op = db.Sequelize.Op;




exports.create = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const productcollection = {
    ProductCode: req.body.ProductCode,
    ProductName: req.body.ProductName,
    ProductData: req.body.ProductData,
    ProductOriginPrice: req.body.ProductOriginPrice,
    Quantity: req.body.Quantity,
    ProductStoreCode: req.body.ProductStoreCode
  };

  ProductCollection.create(productcollection)
    .then(data => {
      res.send("Add ProductCollection successfully");

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ProductCollection."
      });
    });
};



exports.delete = (req, res) => {
  const id = req.params.id;

  ProductCollection.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "ProductCollection was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete ProductCollection with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete ProductCollection with id=" + id
      });
    });
};


exports.findAll = (req, res) => {
  ProductCollection.findAll({
    order: [['ProductStoreCode', 'ASC']],
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ProductCollection."
      });
    });
};