/**
 * @author Daniel Vera Gilliard
 * @create date 2018-02-14 09:13:36
 * @modify date 2018-02-14 09:13:36
 * @desc Scheema for MongoDB
 */
const debug = require("debug")("DEBUG:url");
const mongoose = require("mongoose");

//schema constructer
let Schema = mongoose.Schema;

//url shema
let urlSchema = new Schema({
  originalUrl: String,
  shortUrl: String
});
debug("created sheema for the DB");
//create model from Schema
module.exports =  mongoose.model("links", urlSchema);
