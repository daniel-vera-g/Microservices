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
  originalUrl: string,
  shortUrl: string
});

//create model from Schema
module.exports = mongoose.model("links", urlSchema);
