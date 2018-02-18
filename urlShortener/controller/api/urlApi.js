/**
 * @author Daniel Vera Gilliard
 * @create date 2018-02-14 09:12:44
 * @modify date 2018-02-14 09:12:44
 * @desc API for the URL Shortener
 */

const debug = require("debug")("DEBUG:urlAPI");
const validUrl = require("valid-url");
const ex = module.exports;
const links = require("../../models/url");

//Short Id to generate unique id
const shortId = require("shortid");
//only alphanumeric characters
shortId.characters(
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@"
);

/**
 * Add short URL to the DB
 * @param  {String} longUrl original URl passed by the user
 * @returns {string} shortUrl generated from the longUrl
 */
ex.addShortUrl = async longUrl => {
  debug("adding short url with the longURL %s", longUrl);
  
  let p = new Promise(acc => {
    //generate short id for the shortened Link
    let id = shortId.generate();
debug("%s, %s", id, longUrl);    
    //create & save new link instance
    links.create({ originalUrl: longUrl, shortUrl: id }, (err, link) => {
	debug("%O, %O", err, link);
      if (err) {
        debug("ERROR: %s ,creating a new short URl in the DB with the longURL %s", err, longUrl);
      };
      debug("created link with the shortUrl %s", link.shortUrl);
      acc(link.shortUrl);
    });
  });
  let short = await p;
  //return shortUrl
  return short;
};

/**
 * Check if the given URL is valid
 * @param  {String} url URL given by the User
 * @returns booljean to see if url is valid or not
 */
ex.validateUrl = async url => {
  let p = new Promise((acc, rej) => {
    debug("Checking if %s is a valid url", url);
    if (validUrl.isUri(url)) {
      console.log("Looks like an URI");
      acc(true);
    } else {
      console.log("Not a URI");
      acc(false);
    }

    if (err) {
      debug("There was an error checking for the valid url");
      rej(err);
    }
  });
  let valid = await p;
  return valid; 
};


/**
 * Get the Original URL from the short URL
 * @param  {string} shortUrl short URl created with the long URL
 * @returns original Url
 */
ex.getLongURl = async shortUrl => {
  
  let p = new Promise((acc, rej) => {
    debug("Getting the original url with the shortUrl %s", shortUrl);

    links.findOne({ shortUrl: shortUrl }, "originalUrl", (err, url) => {
      if (err) {
        debug(
          "Error getting the name of the original URl with the short url of %s",
          shortUrl
        );
        rej(false);
      }
      debug(
        "Original url %s with the short url of %s successfully requested",
        url,
        shortUrl
      );
      originalUrl = url["originalUrl"];
      debug('The original url is %s', originalUrl);
      acc(originalUrl);
    });
  });
  let origUrl = await p;
  return origUrl;
};


/**
 * Check if the Given URL exists in the DB
 * @param  {string} Url given by the User
 * @returns {booljean} whether Url exists or not
 */
ex.checkUrlExistence = async url => {
  let p = new Promise((acc, rej) => {
    debug("Checking if url %s exists in the DB", url);
    links.find({ originalUrl: url }, "shortUrl", (err, shortUrl) => {
      if (err) {
        debug("No url %s found in the DB", url);
        rej(err);
      }
      debug("The url %s exits in the DB", longUrl);
      acc(shortUrl);
    });
  });
  let existence = await p;
  return existence;
};
