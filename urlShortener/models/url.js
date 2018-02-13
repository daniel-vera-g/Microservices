// mongoose
const mongoose = require('mongoose');

// default mongoose connection
const mongoDB = process.env.MONGOLAB_URI
mongoose.connect(mongoDB);
//get mongoose use global promise library
mongoose.Promise = global.Promise;
// get default connection
const db = mongoose.connection;

//binf connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection err:'));

