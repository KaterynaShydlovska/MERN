const express = require("express");
const app = express();
require('./server/config/mongoose.config.js');

app.use(express.json(), express.urlencoded({extended:true}));
require('./server/routes/routes')(app);

const port = 8000;


app.listen( port, () => console.log(`Listening on port: ${port}`) );