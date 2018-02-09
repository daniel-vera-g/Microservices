/*
 * server.js - The main application
 */

// NodeJS elements
const http = require("http");

// Express
const express = require('express');

// Express middleqare
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require("path");

const router = express.Router();

//make the routes
let routes = require('./controller/controller');

let app = express();

// BodyParser Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

//Body pareser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

//middleware for the routes
app.use('/', routes);
app.use('/:data', routes);

// set the port
app.set('port', (process.env.PORT || 3000));

// listen to port
app.listen(app.get('port'), function(){
	console.log('Server started at port' + app.get('port'));
});

module.exports = router;
