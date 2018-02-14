/**
 * @author Daniel Vera Gilliard
 * @create date 2018-02-14 09:13:23
 * @modify date 2018-02-14 09:13:23
 * @desc  Controller to handle incoming requests
*/

let bodyParser = require("body-parser");
let express = require("express");
let router = express.Router();

//home route
router.get('/', (req, res, next) => {
    res.render('index');
});

//create and return short url from longUrl 
router.get('/api/shorten', (req, res, nect) => {
    //call the api to create short url
});

// redirect user to original url given the short url
router.get('/:encoded_id', (req, res, next) => {
    //get url and redirect the user
});

module.exports = router;
