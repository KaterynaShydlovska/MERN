const controller = require("../contollers/authors.controller");

module.exports = app =>{
    app.get("/api/authors", controller.getAll);
    app.get("/api/authors/:_id", controller.getOne);
    app.post("/api/authors/new", controller.create);
    app.put("/api/authors/update/:_id", controller.update);
    app.delete("/api/authors/delete/:_id", controller.delete);
}