const assert = require('chai').assert;
const debug = require('debug')('DEBUG:tests');
const urlApi = require('../controller/api/urlApi');
const should = require('should');
const mongoose = require("mongoose");
/*

   let test = async () =>  {
   debug('adding short url');
   let addShortUrlResult = await urlApi.addShortUrl("https://www.youtube.com");
   debug(addShortUrlResult);
   console.log(addShortUrlResult);

   }

   test();
 */
before(function(){
		debug("Hooking before");
		// default mongoose connection
		//const mongoDB = process.env.MONGOLAB_URI;
		const mongoDB = process.env.MONGOLAB_URI;
		debug("connecting to the database");
		mongoose.connect(mongoDB);	
		//get mongoose use global promise library
		mongoose.Promise = global.Promise;
		// get default connection
		const db = mongoose.connection;
		//binf connection to error event
		db.once("open", function(){ debug("CONNECTED");});
		db.on("error", console.error.bind(console, "MongoDB connection err:"));

		});

after(function(){
		mongoose.connection.close();
		});

describe('UrlAPI', () => {
		//addShortUrl test 
		describe('addShortUrl()', () => {
				it('addShortUrl should return a string', async () => {
						let addShortUrlResult = await urlApi.addShortUrl("www.testweb.com");
						debug("Test");            
						assert.typeOf(addShortUrlResult, "string");
						});
				});
		});
//TODO
/*     //getLongUrl test 
       describe('getLongUrl()', () => {
       it('should return a string', async () => {
       let getLongUrlResult = await urlApi.getLongURl("jjljl33423");
       assert.typeOf(getLongUrlResult, 'string');
       });
       });
//validateUrl test
describe('validateUrl()', () => {
it('should reuturn a booljean', async () => {
let validetUrlResult = await urlApi.validateUrl("https://www.youtube.com");
assert.typeOf(validetUrlResult, 'booljean');
})
})
//checkUrlExistence
describe('checkUrlExistence()', () => {
it("Should return a booljean ", async () => {
let checkUrlExistenceResult = await urlApi.checkUrlExistence("https://www.youtube.com");
assert.typeOf(checkUrlExistenceResult, "booljean");
});
})
}) */
