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
  let date = req.params;
  date = date.date;
  console.log("The request parameter is :" + date);

  //call functions to get right time values
  timeObject = timeStamp.checkTime(date, (err) => {
    if (err) throw err;
  })
  res.send(timeObject);
});

module.exports = router;
