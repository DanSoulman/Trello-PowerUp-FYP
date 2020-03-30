/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

// Elements with IDs are available as properties of `window`.
window.startdate.addEventListener("submit", function(event) {
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return t
    .set("card", "shared", "startdate", window.startDateTextfield.value)
    .then(function() {
      t.closePopup();
    });
});

t.render(function() {
  return t
    .get("card", "shared", "startdate")
    .then(function(startdate) {
      startdate = validateDate(startdate);
      window.startDateTextfield.value = startdate;
    })
    .then(function() {
      t.sizeTo("#startdate").done();
    });
});
// Takes in the date and makes sure it's valid. 
function validateDate(date) {
  var error = ""; //This accounts for any errors

  //Regex for format
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) {
    error = "Invalid Date Format";
  }

  //Breaking up the date into month, day and year
  var split = date.split("/");
  // setting the split up date chunks to variables to make it easier to work with
  var month = split[0];
  var day = split[1];
  var year = parseInt(split[2], 10);

  //Deal with inputting zero
  if (day == "00" || month == "00") {
    error = "Invalid Date Format";
  }
  //Deal with the months
  if(month < 0 || month > 12){
    error = "Month doesn't exist";
  }
  //Deal with the no of days in a month
  if ( (month == "01" && day > 31) ||(month == "03" && day > 31) ||(month == "05" && day > 31) ||(month == "07" && day > 31) ||
       (month == "08" && day > 31) ||(month == "10" && day > 31) ||(month == "12" && day > 31) )
  {
    error = "Day " + day + " does not exist in Month " + month;
  }
  //30 days for April, July, Sept and November
  if ( (month == "04" && day > 30) ||(month == "06" && day > 30) ||(month == "09" && day > 30) ||(month == "11" && day > 30) )
  {
    error = "Day " + day + " does not exist in Month " + month;
  }
  //We need to account for leap years in february
  if (month == "02") {
    if ( ( year % 400 == 0 || (year % 100 != 0 && year % 4 == 0) ) ) {
      if (day > 29){
      error = "Day " + day + " does not exist in Feb " + year;  
      }
      
      //Otherwise
    } else if (day > 28) {
      error = "Day " + day + " does not exist in Month " + month;
    }
  }

  //If the date passed validation returns inputted date otherwise it returns the error
  if (error == "") {
    return date;
  } else {
    return error;
  }
}
