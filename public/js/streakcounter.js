/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

// Elements with IDs are available as properties of `window`.
window.streakCounter.addEventListener("submit", function(event) {
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return t
    .set("card", "shared", "count", window.count)
    .then(function() {
    console.log("set window.streakcounter.count = " + window.count) //1 submit value late? 
      t.closePopup();
    });
});

t.render(function() {
  return t
    .get("card", "shared", "count", window.count)
    .then(function(count) {
      window.count = count; //tied to it incrementing? 
      })
    .then(function() {
      t.sizeTo("#streakCounter").done();
    });
});
