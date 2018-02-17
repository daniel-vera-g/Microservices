const assert = require('chai').assert;
const debug = require('debug')('DEBUG:tests');
const urlApi = require('../controller/api/urlApi');

let addShortUrlResult = await urlApi.addShortUrl("https://www.youtube.com/");