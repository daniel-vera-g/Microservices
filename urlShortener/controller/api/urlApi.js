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
 */

ex.addShortUrl = async longUrl => {

  let p =  new Promise((acc, rej) => {
    debug("adding short url with the longURL %s", longUrl);
    //generate short url
    let id = shortId.generate();
    let host = "localhost:3000/";

    //create & save new link instance
    links.create(
      { _id: id, originalUrl: longUrl, shortUrl: host + id },
      (err, _id) => {
        if (err) {
          debug(
            "ERROR creating new short URl in the DB with the longURL %S",
            longUrl
          );
          rej(err);
        }
        debug("Short url with the id %s created", id);
        acc(_id);
      }
    );
  });

  let gfId = await p;
  return gfId;
};

/**
 * Get the Original URL from the short URL
 * @param  {string} shortUrl short URl created with the long URL
 * @returns original Url
 */
ex.getLongURl = async shortUrl => {
  let p = new Promise((acc, rej) => {
    debug("Getting the originla url with the shortUrl %s", shortUrl);

    links.find({ shortUrl: shortUrl }, longUrl, (err, longUrl) => {
      if (err) {
        debug(
          "Error getting the name of the original URl with the short url of %s",
          shortUrl
        );
        rej(err);
      }
      debug(
        "Original url %s with the short url of %s successfully requested",
        longUrl,
        shortUrl
      );
      acc(longUrl);
    });
  });

  let origUrl = await p;
  return origUrl;
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
 * Check if the Given URL exists in the DB
 * @param  {string} Url given by the User
 * @returns {booljean} whether Url exists or not
 */
ex.checkUrlExistense = async url => {
  let p =  new Promise((acc, rej) => {
    debug("Checking if url %s exists in the DB", url);
    links.find({ originalUrl: url }, shortUrl, (err, shortUrl) => {
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