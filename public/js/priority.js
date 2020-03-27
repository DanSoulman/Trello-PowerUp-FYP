/* global TrelloPowerUp */
var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();



// Elements with IDs are available as properties of `window`.
window.priority.addEventListener("submit", function(event) {
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return t
    .set("card", "shared", "priority", window.priorityDropDown.value)
    .then(function() {
      t.closePopup();
    });
});

t.render(function() {
  return t
    .get("card", "shared", "priority")
    .then(function(priority ) {
      window.priorityDropDown.value = priority;
    })
    .then(function() {
      t.sizeTo("#priority").done();
    });
});
