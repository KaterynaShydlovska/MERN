const Joke = require('../models/jokes.model');

module.exports.findAllJokes =(req, res) =>{
    console.log("find all function")
    Joke.find()
    .then(findAllJokes => res.json({results: findAllJokes}))
    .catch(err=> res.json({message: "that didnt work", error: err}))
}

module.exports.getOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => res.json({ user: oneSingleJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


module.exports.createJoke = (req, res) =>{
    Joke.create(req.body)
    .then(newJoke => res.json({joke: newJoke}))
    .catch(err=> res.json({message: "that didnt work", error: err}))
}

module.exports.updateJoke = (req, res) => {
    console.log(req.params, 'REQQQ')
    console.log(req.body, 'Body')
    Joke.findByIdAndUpdate(req.params.id, req.body)
        .then(updatedJoke => {console.log(updatedJoke); return res.json({ joke: updatedJoke }) })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}