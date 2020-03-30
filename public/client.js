/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON =
  "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421";
var GREY_ROCKET_ICON =
  "https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717";
var WHITE_ROCKET_ICON =
  "https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Fwhite-rocket-ship.png?1495811896182";

TrelloPowerUp.initialize({
  /*||----------------------------------------||
    ||  C  A  R  D     B  U  T  T  O  N  S    ||
    ||Appear on the right hand side of cards  ||
    ||----------------------------------------||*/
  "card-buttons": function(t, options) {
    return [
      {
        //Priority Button
        icon: BLACK_ROCKET_ICON,
        text: "Set Priority",
        callback: function(t) {
          return t.popup({
            title: "Priority",
            url: "https://trello-prototype.glitch.me/priority.html"
          });
        }
      },

      {
        //Task Estimate Button
        icon: BLACK_ROCKET_ICON,
        text: "Add Task Estimate",
        callback: function(t) {
          return t.popup({
            title: "Task Estimate",
            url: "https://trello-prototype.glitch.me/taskpoint.html"
          });
        }
      },

      {
        //Start Date Button
        icon: BLACK_ROCKET_ICON,
        text: "Set Start Date",
        callback: function(t) {
          return t.popup({
            title: "Start Date",
            url: "https://trello-prototype.glitch.me/startdate.html"
          });
        }
      },
      {
        //Streak Counter Button
        icon: BLACK_ROCKET_ICON,
        text: "Add Streak Counter",
        callback: function(t) {
          return t.popup({
            title: "Streak Counter",
            url: "https://trello-prototype.glitch.me/streakcounter.html"
          });
        }
      },
      {
        //Set Story as Blocked Button
        icon: BLACK_ROCKET_ICON,
        text: "Set Card as Blocked",
        callback: function(t) {
          return t.popup({
            title: "Blocked Card",
            url: "https://trello-prototype.glitch.me/index.html"
          });
        }
      },
      {
        //Set Story as Epic Button
        icon: BLACK_ROCKET_ICON,
        text: "Set Card as an Epic",
        callback: function(t) {
          return t.popup({
            title: "Epic Task",
            url: "https://trello-prototype.glitch.me/index.html"
          });
        }
      }
    ];
  },
  /*--------------------------------------------//
  //P  R  I  O  R  I  T  Y     S  O  R  T  E  R //
  //-------------------------------------------*/
  "list-sorters": function(t, options) {
    return t.list("name", "id").then(function(list) {
              return [
                {
                  text: "Sort by Priority",
                  callback: function(t, opts) {
                    console.log(opts.cards);
                    // Trello will call this if the user clicks on this sort
                    // opts.cards contains all card objects in the list
                    var sortedCards = opts.cards.sort(function(a, b) {
                     // console.log(a);
                      if (
                        (a.priority == "High Priority" && b.priority == null) ||
                        (a.priority == "Medium Priority" && b.priority == null) ||
                        (a.priority == "Low Priority" && b.priority == null) ||
                        (a.priority == "High Priority" && b.priority == "Medium Priority") ||
                        (a.priority == "High Priority" && b.priority == "Low Priority") ||
                        (a.priority == "Medium Priority" && b.priority == "Low Priority")
                        )
                      {
                        return 1;
                      }

                      else if (
                        (b.priority == "High Priority" && a.priority == null)               ||
                        (b.priority == "Medium Priority" && a.priority == null)             ||
                        (b.priority == "Low Priority" && a.priority == null)                ||
                        (b.priority == "High Priority" && a.priority == "Medium Priority")  ||
                        (b.priority == "High Priority" && a.priority == "Low Priority")     ||
                        (b.priority == "Medium Priority" && a.priority == "Low Priority")
                      )
                      {
                        return -1;
                      }
                      else {
                        return 0;
                      }
                      console.log("Finished sort.")
                    });
                    return {
                      sortedIds: sortedCards.map(function(c) {
                        return c.id;
                      })
                    };
                  }
                }
              ];
    });
  },
  /*-------------------------------------------------/
  /            C  A  R  D    B  A  D  G  E  S        /        
  /       The ones that appear on the dashboard      /
  /--------------------------------------------------*/
  "card-badges": function(t, options) {
    return t.getAll().then(function(data) {
      var card = data.card.shared; //Used for getting custom variables

      return [
        {
          icon: card.priority ? GREY_ROCKET_ICON : null,
          text: card.priority || "",
          color: card.priority ? "green" : null
        },
        {
          icon: card.taskpoint ? GREY_ROCKET_ICON : null,
          text: card.taskpoint || "",
          color: card.taskpoint ? "green" : null
        },
        {
          icon: card.count ? GREY_ROCKET_ICON : null,
          text: card.count ? "Counter: " + card.count : "", //Maybe change if I want it to be able to display 0
          color: card.count ? "green" : null
        }
      ];
    });
  },

  /*-------------------------------------------------|
  |    C  A  R  D   D E T A I L   B  A  D  G  E  S   |        
  |   The ones that appear on the top of a card      |
  |-------------------------------------------------*/

  "card-detail-badges": function(t, options) {
    return t.getAll().then(function(data) {
      var card = data.card.shared; //Used for getting custom variables
      
      return [
        {
          title: "Priority",
          text: card.priority || "Set Priortiy?",
          color: card.priority ? null : "blue",
          callback: function(t) {
            return t.popup({
              title: "Priority",
              url: "https://trello-prototype.glitch.me/priority.html",
              target: "Trello Landing Page"
            });
          }
        },
        {
          title: "Task Point",
          text: card.taskpoint || "Set Task Estimate?",
          color: card.taskpoint ? null : "blue",
          callback: function(t) {
            return t.popup({
              title: "Task Point",
              url: "https://trello-prototype.glitch.me/taskpoint.html",
              target: "Trello Landing Page"
            });
          }
        },
        {
          title: "Streak Counter",
          text: card.count || "Count Repetitive Task?",
          color: card.taskpoint ? null : "blue",
          callback: function(t) {
            return t.popup({
              title: "Streak Counter",
              url: "https://trello-prototype.glitch.me/streakcounter.html",
              target: "Trello Landing Page"
            });
          }
        } //,
      ];
    });
  }
});
