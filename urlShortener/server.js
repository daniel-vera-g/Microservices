/*
 * server.js - The main application
 */

//dotenv
require('dotenv').config();

 // NodeJS elements
const http = require("http");
const path = require('path');

// Express
const express = require('express');

// Express middleqare
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//Viewengine
const handlebars = require('express-handlebars');


//mongoDb
const mongodb = require('mongodb');
//mongo Client interface to connect to mongodb server
const MongoClient = mongodb.MongoClient;
//connection url
const url = process.env.MONGOLAB_URI;

//connect Method to connect to server
MongoClient.connect(url, (err, db) => {
	if (err) console.log('Unable to connect to MongoDB server. Error: ', err);

	console.log('Connection established to ', url);
	
	// ...

	//close connection
	db.close();
	
})


const router = express.Router();

//make the routes
let routes = require('./controller/routes/routes.js');

let app = express();

// BodyParser Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

//middleware for the routes
app.use('/', routes);
app.use('/new/:', routes);

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout: 'layouts'}));
app.set('view engine', 'handlebars');

// set the port
app.set('port', (process.env.PORT || 3000));

// listen to port
app.listen(app.get('port'), function(){
	console.log('Server started at port' + app.get('port'));
});

module.exports = router;
