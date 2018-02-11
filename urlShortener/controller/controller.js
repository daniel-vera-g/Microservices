/**
 * Controller to handle incoming requests
*/
let bodyParser = require("body-parser");
let express = require("express");
let router = express.Router();

//router to make new shortened URl
router.get('/new/:url(*)', (req, res, next) => {

})

//router to query existing URL
router.get('/')

module.exports = router;
