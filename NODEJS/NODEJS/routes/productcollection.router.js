const controller = require("../controllers/ProductCollectionController");

module.exports = app => {
    app.get("/product", controller.findAll);
    app.post("/product/add", controller.create);
    // app.put("/product/(:id)", controller.update);
    app.delete("/product/(:id)", controller.delete);

};