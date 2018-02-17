const assert = require('chai').assert;
const debug = require('debug')('DEBUG:tests');
const urlApi = require('../controller/api/urlApi');

let addShortUrlResult = urlApi.addShortUrl("https://www.youtube.com");
let getLongUrlResult = urlApi.getLongURl(addShortUrlResult);
let validetUrlResult = urlApi.validateUrl("https://www.youtube.com");
let checkUrlExistenceResult = urlApi.checkUrlExistence("https://www.youtube.com");

describe('UrlAPI', () => {
    //addShortUrl test 
    describe('addShortUrl()', () => {
        it('addShortUrl should return a string', () => {
            assert.typeOf(addShortUrlResult, 'string');
        });
    });
    //getLongUrl test 
    describe('getLongUrl()', () => {
        it('should return a string', () => {
            assert.typeOf(getLongUrlResult, 'string');
        });
    });
    //validateUrl test
    describe('validateUrl()', () => {
        it('should reuturn a booljean', () => {
            assert.typeOf(validetUrlResult, 'booljean');
        })
    })
    //checkUrlExistence
    describe('checkUrlExistence()', () => {
        it("Should return a booljean ", () => {
            assert.typeOf(checkUrlExistenceResult, 'booljean');
        })
    })
})