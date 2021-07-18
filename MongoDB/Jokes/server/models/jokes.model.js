const mongoose = require('mongoose');
 
const JokesSchema = new mongoose.Schema({
    setup: {
        type:String,
        required: [true, 'Setup is required.'],
        minlength: [10, 'Setup must be at least 10 characters long']
    },
    punchine: {
        type:String,
        required: [true, 'Punchine is required.'],
        minlength: [3, 'Punchine must be at least 10 characters long']

    }
});
 
const Joke = mongoose.model('Joke', JokesSchema);
 
module.exports = Joke;