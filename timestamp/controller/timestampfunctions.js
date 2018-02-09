/**
 * Functions to get the Unix & natural Time
 */
const moment = require('moment');
let ex = module.exports;
let date = new Date();

/**
 * Check Whether time is unix ot Natural
 * @param  {stiring} time input from the user --> Time to check
 * @param  {} callback callback function with
 */
ex.checkTime = (time, callback) => {

  //create json to get back
  processedDate = {
    "unix": null,
    "natural": null
  }

  // check if time is in Unix format
  if(+time >= 0){
    processedDate.unix = +time;
    processedDate.natural = moment.unix(+time).format("MMM D, YYYY");
  }
  //check if the time is NaN & if it is in the right format
  if (isNaN(+time) && moment(time, "MMM DD, YYYY").isValid()) {
    processedDate.unix = moment(time, "MMM DD, YYYY").format("X");
    processedDate.natural = time;
  }
  return processedDate;
};