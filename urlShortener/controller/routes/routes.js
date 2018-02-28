/**
 * @author Daniel Vera Gilliard
 * @create date 2018-02-14 09:13:23
 * @modify date 2018-02-14 09:13:23
 * @desc  Controller to handle incoming requests
 */

const express = require("express");
const bodyParser = require("body-parser");
const debug = require('debug')('DEBUG:routes');
const urlAPI = require("../api/urlApi");
const router = express.Router();

//home route
router.get("/", (req, res, next) => {
  res.render("index");
});

//create and return short url from longUrl
router.get("/new/:url(*)", async (req, res, next) => {
  let url = req.params.url;
  debug(url);
  
  debug("The url given by the user is %s", url);

  //check if URL is valid
  debug("Checking if the url is in the right format");
  let isValid = await urlAPI.validateUrl(url);
  debug("The url format is: ", isValid);

  if (isValid) {
    //call the api to create short url
    let shortUrl = await urlAPI.addShortUrl(url);
    res.send('The short url is: ' + shortUrl);
  } else {
    res.send("Url not valid. Please try another time with a valid url");
  }
});

// redirect user to original url given the short url
router.get("/:shortened", async (req, res, next) => {
    let shortLink = req.params.shortened;
    debug('requesting for a short link %s', shortLink);

    //check if url exists and get url from the database
    debug('quering the original url for %s', shortLink);
    let urlExistence = await urlAPI.getLongURl(shortLink);
    debug('The original url is %s', urlExistence);

    if(urlExistence == false) {
        debug('The existence of the url is %s', urlExistence);
        res.send('Short link does not exist. Please check the link or create one first');
    }else{
        res.redirect(urlExistence);
    }

  //redirect the user
});

module.exports = router;
