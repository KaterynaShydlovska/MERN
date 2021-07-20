const Product = require('../models/product.model');

module.exports.getAllProducts=(req, res) =>{
    console.log("find all function")
    Product.find()
    .then(findAllProducts => {return res.json({results: findAllProducts})})
    .catch(err=> res.json({message: "that didnt work", error: err}))
}

module.exports.createProduct = (req, res) =>{
    Product.create(req.body)
    .then(newProduct => res.json({joke: newProduct}))
    .catch(err=> res.json({message: "that didnt work", error: err}))
}

module.exports.getOneProduct = (req, res) => {
    console.log(req.params)
    Product.findOne({ _id: req.params._id })
        .then(oneSingleProduct => res.json({ product: oneSingleProduct }))
        .catch(err => res.json({ message: 'Test', error: err }));
}