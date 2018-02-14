/**
 * @author Daniel Vera Gilliard
 * @create date 2018-02-14 09:12:44
 * @modify date 2018-02-14 09:12:44
 * @desc API for the URL Shortener
*/

let ex = (module.exports = {});


/**
 * Add short URL to the DB
 * @param  {String} longUrl original URl passed by the user
 * @param  {} callback Callback With error or short url
 */
ex.addShortUrl = async (longUrl, callback) => {
  //convert Long URL in short URL
};

/**
 * Get the Original URL from the short URL
 * @param  {string} shortUrl short URl created with the long URL
 * @param  {} callback Callback with Error or Long URL
 */
ex.getLongURl = async (shortUrl, callback) => {};

/**
 * Get the short URL by the ID
 * @param  {int} UrlId Id of the Short URL in the DB
 * @param  {} callback calllback with Error or short url
 */
ex.getShortUrl = async (UrlId, callback) => {};

/**
 * Check if the given URL is valid
 * @param  {String} url URL given by the User
 * @param  {} callback Callback with Error or booljean to see if url is valid or not
 */
ex.validateUrl = async (url, callback) => {};

/**
 * Check if the Given URL exists in the DB
 * @param  {string} Url Url given by the User
 * @param  {} callback Callback with error or Booljean whether Url exists or not
 */
ex.checkUrlExistense = async (Url, callback) => {};
