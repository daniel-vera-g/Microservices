const assert = require('chai').assert;
const debug = require('debug')('DEBUG:tests');
const urlApi = require('../controller/api/urlApi');
const should = require('should');
/*
let test = async () =>  {
    debug('adding short url');
    let addShortUrlResult = await urlApi.addShortUrl("https://www.youtube.com");
    debug(addShortUrlResult);
    console.log(addShortUrlResult);
    
}

test();
 */


describe('UrlAPI', () => {
    //addShortUrl test 
    describe('addShortUrl()', () => {
        it('addShortUrl should return a string', async () => {
            let addShortUrlResult = await urlApi.addShortUrl("www.testweb.com");
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