/**
 * @author Daniel Vera Gilliard
 * @create date 2018-02-28 08:28:18
 * @modify date 2018-02-28 08:28:18
 * Entry point of image abstraction layer
*/

//debub
const debug = require("debug")("DEBUG:server");
const name = "Image Search abstraction layer";
debug("booting %s", name);

//dotenv
require("dotenv").config();

// mongoose
const mongoose = require("mongoose");

// NodeJS elements
const http = require("http"); const app = express(); 
const path = require("path");

// Express
const express = require("express");

// Express middleqare
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//Viewengine
const handlebars = require("express-handlebars");

const router = express.Router();

//make the routes
let routes = require("./controller/routes/routes.js");

let app = express();

// default mongoose connection
//const mongoDB = process.env.MONGOLAB_URI;
const mongoDB = process.env.MONGOLAB_URI;
debug("connecting to the database");
mongoose.connect(mongoDB);
//get mongoose use global promise library
mongoose.Promise = global.Promise;
// get default connection
const db = mongoose.connection;
//bind connection to error event
db.on("error", console.error.bind(console, "MongoDB connection err:"));

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//middleware for the routes
app.use("/", routes);
//TODO set right path
//app.use("/new/:", routes);

// View Engine
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", handlebars({ defaultLayout: "layouts" }));
app.set("view engine", "handlebars");

// set the port
app.set("port", process.env.PORT || 3000);

// listen to port
app.listen(app.get("port"), function() {
  console.log("Server started at port" + app.get("port"));
});

module.exports = router;
