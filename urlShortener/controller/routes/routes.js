/**
 * @author Daniel Vera Gilliard
 * @create date 2018-02-14 09:13:23
 * @modify date 2018-02-14 09:13:23
 * @desc  Controller to handle incoming requests
*/

const express = require("express");
const bodyParser = require("body-parser");
const urlAPI = require('../api/urlApi');
const router = express.Router();

//home route
router.get('/', (req, res, next) => {
    res.render('index');
});

//create and return short url from longUrl 
router.get('/new/:url', (req, res, nect) => {
    //check if URL is valid

    //call the api to create short url
});

// redirect user to original url given the short url
router.get('/:shortened', (req, res, next) => {
    //get url from the database

    //redirect the user

});

module.exports = router;
