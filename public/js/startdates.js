/* global TrelloPowerUp */
var t = TrelloPowerUp.iframe();
var moment = require("moment");
var now = moment().toDate();

// Elements with IDs are available as properties of `window`.
window.date.addEventListener("submit", function(event) {
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return t.set("card", "shared", "date").then(function() {
    t.closePopup();
  });
});

t.render(function() {
  return t
    .get("card", "shared", "date")
    .then(function(date) {
      window.date.value = date;
    })
    .then(function() {
      t.sizeTo("#date").done();
    });
});
