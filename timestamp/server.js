/*
 * index.js - The main application
 */

// NodeJS elements
const http = require("http");

// Express
const express = require('express');

// Express middleqare
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const path = require("path");

const router = express.Router();


let app = express();

// BodyParser Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());


// Insert static content here - before the dynamic one
// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
// middleware for the routes to know where to look for the routes

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layouts'}));
app.set('view engine', 'handlebars');


// HTTP & HTTPS server
let httpServer = http.createServer(app);

httpServer.listen(80, () => {
    console.log('The server has started on port 80');
});

module.exports = router;
