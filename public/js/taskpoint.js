/* global TrelloPowerUp */
var t = TrelloPowerUp.iframe();

// Elements with IDs are available as properties of `window`.
window.taskpoint.addEventListener("submit", function(event) {
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return t
    .set("card", "shared", "taskpoint", window.taskpointTextfield.value)
    .then(function() {
      t.closePopup();
    });
});

t.render(function() {
  return t
    .get("card", "shared", "taskpoint")
    .then(function(taskpoint) {
      window.taskpointTextfield.value = taskpoint;
    })
    //Sizes window to allow all buttons to be seen at once
    .then(function() {
      t.sizeTo(document.body).done();
    });
});
