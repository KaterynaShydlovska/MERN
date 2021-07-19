const express = require("express");
const app = express()
const port = 8000;

const cors = require("cors");

app.use(express.json()) //allows us to use json
app.use(express.urlencoded({extended:true})) //more json related stuff
app.use(cors()) //be able to share resources with other origins (sources like react app)

require("./server/config/product.config");

//make server.js communicate with the routes
require("./server/routes/product.routes")(app)


app.listen(port, ()=>console.log(`Listening on port number ${port}`))