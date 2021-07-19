const controller = require('../controllers/jokes.controller');
const express = require("express");
const app = express();
const router = express.Router();

module.exports = app =>{
    app.get("/", () => console.log('here'))
    app.get("/api/jokes", controller.findAllJokes);
    app.get("/api/jokes/getOne/:id", controller.getOneJoke);
    app.get("/api/jokes/random", controller.findRandomJoke);
    app.post("/api/jokes/new", controller.createJoke);
    app.put("/api/jokes/update/:_id", controller.updateJoke);
    app.delete("/api/jokes/delete/:_id", controller.deleteJoke);
}

