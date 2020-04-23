/* global TrelloPowerUp */
var t = TrelloPowerUp.iframe();

// Elements with IDs are available as properties of `window`.
window.priority.addEventListener("submit", function(event) {
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return t
  //sets scope, visibility, key, value. Essentially sets card info 
    .set("card", "shared", "priority", window.priorityDropDown.value)
    .then(function() {
    //closes window once added
      t.closePopup();
    });
});

//When reopened
t.render(function() {
  return t
    //gets the priority stored and sets the dropdown to previous value
    .get("card", "shared", "priority")
    .then(function(priority ) {
      window.priorityDropDown.value = priority;
    })
    //Sizes window to allow all buttons to be seen at once
    .then(function() {
      t.sizeTo(document.body).done();
    });
});
