/* global TrelloPowerUp */
var t = TrelloPowerUp.iframe();

// Elements with IDs are available as properties of `window`.
window.blockedStory.addEventListener("submit", function(event) {
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  //Object holding both variables as set only allows one value
  let myKey = {
    cardName: window.blockedStory.cardName.value,
    cardLink: window.blockedStory.cardLink.value
  };
  //sets the card value
  return t.set("card", "shared", myKey).then(function() {
    t.closePopup();
  });
});

//When you open the window
t.render(function() {
  return t
    .getAll() //Get all the variables
    .then(function(myKey) {
      //sets the windows the the current values so user doesn't think it's been lost.
      window.blockedStory.cardName.value = myKey.card.shared.cardName;
      window.blockedStory.cardLink.value = myKey.card.shared.cardLink;
    })
    .then(function() {
      //Sizes window to allow all buttons to be seen at once
      t.sizeTo(document.body).done();
    });
});
