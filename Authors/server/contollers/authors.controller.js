const Author = require("../models/authors.model");

module.exports.getAll = (req, res) => {
    Author.find()
        .then(allAuthors => res.json({authors: allAuthors}))
        .catch(err => res.json({message: "Couldn't gett all authors", err: err})) 
}

module.exports.getOne = (req, res) => {
    Author.findOne({_id: req.params._id})
        .then(author => res.json({author: author}))
        .catch(err => res.json({message: "Couldn't get author", err: err}))
}

module.exports.create = (req, res) => {
    console.log(req.body, "Boooooooody!")
    Author.create(req.body)
        .then(newAuthor => res.json({author: newAuthor}))
        .catch(err => res.json({message: "Something went wrong, author wasn't created", err: err}))
}

module.exports.update = (req, res) => {
    console.log(req.body, '+=+++++++++++++++++=')
    Author.findOneAndUpdate({_id: req.params._id},
    req.body,
    {new: true, runValidators: true}
    )
        .then(updatedAuthor => res.json({author: updatedAuthor}))
        .catch(err => res.json({message: "Oh no, author is not updated", err: err}))
}

module.exports.delete = (req, res) => {
    Author.findOneAndDelete( { _id: req.params._id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "OOOPs, author is not deleted, try again", err:err}))
}