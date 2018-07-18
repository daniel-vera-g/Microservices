/*
 * server.js - The main application
 */

// NodeJS elements
const http = require("http");

// Express
const express = require("express");

// Express middleqare
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const exphbs = require("express-handlebars");
const path = require("path");

const router = express.Router();

// make the routes
const routes = require("./controller/controller");

const app = express();

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


// Insert static content here - before the dynamic one
// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({ defaultLayout: "layouts" }));
app.set("view engine", "handlebars");

// Body pareser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// middleware for the routes
app.use("/", routes);

// set the port
app.set("port", (process.env.PORT || 3000));

// listen to port
app.listen(app.get("port"), () => {
	console.log('Server started at port' + app.get('port'));
});

module.exports = router;
