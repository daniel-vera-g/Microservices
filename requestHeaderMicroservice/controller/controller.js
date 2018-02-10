let bodyParser = require("body-parser");
let express = require("express");
let router = express.Router();

//home handler
router.get("/", (req, res, next) => {
  //create array with information
  let information = {
    ipAdress: null,
    language: null,
    operatingSystem: null
  };

  let reqHeader = req.headers;
  console.log(reqHeader);

  //language
  let reqLanguage = reqHeader["accept-language"].split(",")[0].trim();
  console.log(reqLanguage);
  information.language = reqLanguage;

  //OS
  let reqOs = reqHeader["user-agent"];
  //get only thing in brackets and take the first parameter
  reqOs = reqOs.split(/[\(\)]/)[1];
  console.log(reqOs);
  //trim to remove whitespaces
  reqOs.trim();
  console.log(reqOs);
  information.operatingSystem = reqOs;

  //get ipAdress, language & operating system from request
  information.ipAdress =
    req.header("x-forwarded-for") || req.connection.remoteAddress;

  //send information back to client
  res.send(information);
});

module.exports = router;
