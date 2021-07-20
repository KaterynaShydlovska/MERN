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

module.exports.updateOneProduct = (req, res) =>{

    console.log("\n", req.body, "request", "\n")

    Product.findOneAndUpdate({ _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
    .then(updateProduct => {return res.json({product: updateProduct})})
    .catch( err => res.json({message: "Something went wrong with update product", error: err}))
}

module.exports.deleteOneProduct = (req, res) =>{
    Product.deleteOne({_id: req.params._id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({message: "Can't delete this product", error: err}))
}