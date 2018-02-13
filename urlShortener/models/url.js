let ex = module.exports = {};

const mongoose = require('mongoose');
    
    //schema constructer
    let Schema = mongoose.Schema;
    
    //url shema
    let url = new Schema({
        originalUrl: string,
        shortUrl: string
    });

    /**
     * Add short URL to the DB
     * @param  {String} longUrl original URl passed by the user
     * @param  {} callback Callback With error or short url
     */
    ex.addShortUrl = (longUrl, callback) => {}

    /**
     * Get the Original URL from the short URL
     * @param  {string} shortUrl short URl created with the long URL
     * @param  {} callback Callback with Error or Long URL
     */
    ex.getLongURl = (shortUrl, callback) => {
        
    }
    
    /**
     * Get the short URL by the ID
     * @param  {int} UrlId Id of the Short URL in the DB
     * @param  {} callback calllback with Error or short url
     */
    ex.getShortUrl = (UrlId, callback) => {
        
    }

    /**
     * Check if the given URL is valid
     * @param  {String} url URL given by the User
     * @param  {} callback Callback with Error or booljean to see if url is valid or not
     */
    ex.validateUrl = (url, callback) => {
        
    }

    /**
     * Check if the Given URL exists in the DB 
     * @param  {string} Url Url given by the User
     * @param  {} callback Callback with error or Booljean whether Url exists or not
     */
    ex.checkUrlExistense = (Url, callback) => {
        
    }