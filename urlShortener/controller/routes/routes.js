/**
 * Controller to handle incoming requests
*/
let bodyParser = require("body-parser");
let express = require("express");
let router = express.Router();

//home route
router.get('/', (req, res, next) => {
    res.render('index', );
})

//router to make new shortened URl
router.get('/new/:url(*)', (req, res, next) => {

})
module.exports = router;
