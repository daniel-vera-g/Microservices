let bodyParser = require("body-parser");
let express = require("express");
let timeStamp = require("./timestampfunctions");

let router = express.Router();

//home handler
router.get('/', (req, res, next) => {
  res.render('home');
})

// get date
router.get("/:date", function(req, res, next) {

  let time = req.body.date;
  console.log(date);
});

module.exports = router;
