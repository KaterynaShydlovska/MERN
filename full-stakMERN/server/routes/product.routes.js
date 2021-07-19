const controller = require('../controller/product.controller.js');

module.exports = app =>{
    app.get('/api/products', controller.getAllProducts);
    app.post('/api/product/new', controller.createProduct);

}