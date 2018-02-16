/**
 * @author Daniel Vera Gilliard
 * @create date 2018-02-14 09:12:44
 * @modify date 2018-02-14 09:12:44
 * @desc API for the URL Shortener
 */

const debug = require("debug")("DEBUG:urlAPI");
let ex = module.exports;
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
  return new Promise((acc, rej) => {
    debug("adding short url with the longURL %s", longUrl);
    //generate short url
    let id = shortId.generate();
    let host = "localhost:3000/";

    //create & save new link instance
    links.create(
      { _id: id, originalUrl: longUrl, shortUrl: host + id },
      (err, _id) => {
        if (err) {
          debug("ERROR creating new short URl in the DB with the longURL %S", longUrl);
          rej(err);
        }
        debug("Short url with the id %s created", id);
        acc(_id);
      }
    );
  });
};

/**
 * Get the Original URL from the short URL
 * @param  {string} shortUrl short URl created with the long URL
 * @returns original Url
 */
ex.getLongURl = async shortUrl => {
  return new Promise((acc, rej) => {});
};

/**
 * Get the short URL by the ID
 * @param  {int} UrlId Id of the Short URL in the DB
 * @returns the short url from the id
 */
ex.getShortUrl = async UrlId => {
  return new Promise((acc, rej) => {});
};

/**
 * Check if the given URL is valid
 * @param  {String} url URL given by the User
 * @requires booljean to see if url is valid or not
 */
ex.validateUrl = async url => {
  return new Promise((acc, rej) => {});
};

/**
 * Check if the Given URL exists in the DB
 * @param  {string} Url Url given by the User
 * @returns whether Url exists or not
 */
ex.checkUrlExistense = async (Url, callback) => {
  return new Promise((acc, rej) => {});
};
