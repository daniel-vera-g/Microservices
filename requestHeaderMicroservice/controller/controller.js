let bodyParser = require("body-parser");
let express = require("express");
let router = express.Router();

//home handler
router.get('/', (req, res, next) => {

  //create array with information
  let information = {
    ipAdress: null,
    language: null,
    operatingSystem: null
  }

  //get ipAdress, language & operating system from request
  

  //fill information in array


  //send information back to client
  res.send(information);
})

module.exports = router;
