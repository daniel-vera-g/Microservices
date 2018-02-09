let bodyParser = require("body-parser");
let express = require("express");
let router = express.Router();

//home handler
router.get('/', (req, res, next) => {
  console.log(req.connection.remoteAddress);
  res.end();
  
})

module.exports = router;
