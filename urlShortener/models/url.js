/**
 * @author Daniel Vera Gilliard
 * @create date 2018-02-14 09:13:36
 * @modify date 2018-02-14 09:13:36
 * @desc Scheema for MongoDB
 */

const mongoose = require("mongoose");

//schema constructer
let Schema = mongoose.Schema;

//url shema
let urlSchema = new Schema({
  _id: integer,
  originalUrl: String,
  shortUrl: String
});

//create model from Schema
module.exports =  mongoose.model("links", urlSchema);
