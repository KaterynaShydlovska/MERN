const mongoose = require('mongoose');
 
const ProductSchema = new mongoose.Schema({
    title: {
        type:String,
        required: [true, 'Title is required.'],
        minlength: [1, 'Title must be at least 3 characters long']
    },
    price: {
        type: Number
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
        minlength: [10, 'Description must be at least 10 characters long']

    }
});
 
const Product = mongoose.model('Product', ProductSchema);
 
module.exports = Product;