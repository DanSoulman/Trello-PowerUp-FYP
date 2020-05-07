/* global TrelloPowerUp */

/*||---------||
  ||I C O N S|| 
  ||---------||*/
//Allow the program to access the images in the assets section. 
var CLOCK_ICON =
  "https://cdn.glitch.com/1a623816-70a1-42fc-bf8b-fd43e9e3210b%2FClock%204.2.png?v=1586190859641";
var POINT_ICON =
  "https://cdn.glitch.com/1a623816-70a1-42fc-bf8b-fd43e9e3210b%2FTaskPoint.png?v=1586192665199";
var PRIORITY_ICON =
  "https://cdn.glitch.com/1a623816-70a1-42fc-bf8b-fd43e9e3210b%2Fpriority.png?v=1586192855045";
var COUNTER_ICON =
  "https://cdn.glitch.com/1a623816-70a1-42fc-bf8b-fd43e9e3210b%2FCounter.png?v=1586193416033";
var BLOCKED_ICON =
    "https://cdn.glitch.com/1a623816-70a1-42fc-bf8b-fd43e9e3210b%2FBlocked.png?v=1586797613534";

TrelloPowerUp.initialize({  //Initialises the Power-Up features in use from the Library. 
  /*||----------------------------------------||
    ||  C  A  R  D     B  U  T  T  O  N  S    ||
    ||Appear on the right hand side of cards  ||
    ||----------------------------------------||*/
  "card-buttons": function(t, options) {
    return [
      {
        //Priority Button
        icon: PRIORITY_ICON,
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
        icon: POINT_ICON,
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
        icon: CLOCK_ICON,
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
        icon: COUNTER_ICON,
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
        icon: BLOCKED_ICON,
        text: "Set Card as Blocked",
        callback: function(t) {
          return t.popup({
            title: "Blocked Card",
            url: "https://trello-prototype.glitch.me/blockedStory.html"
          });
        }
      }
    ];
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
          icon: card.priority ? PRIORITY_ICON : null,
          text: card.priority || "",
          color: card.priority ? "green" : null
        },
        {
          icon: card.taskpoint ? POINT_ICON : null,
          text: card.taskpoint || "",
          color: card.taskpoint ? "green" : null
        },
        {
          icon: card.count ? COUNTER_ICON : null,
          text: card.count ? "Counter: " + card.count : "",
          color: card.count ? "green" : null
        },
        {
          icon: card.startdate ? CLOCK_ICON : null,
          text: card.startdate ? "Starts: " + card.startdate : "",
          color: card.startdate ? "green" : null
        },
        {
          icon: card.cardName ? BLOCKED_ICON : null,
          text: card.cardName ? "Blocked By: " + card.cardName : "",
          color: card.cardName ? "red" : null
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
          text: card.priority || "Set Priority?",
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
          title: "Task Estimate",
          text: card.taskpoint == undefined ? "Set Task Estimate?" : card.taskpoint,
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
          text: card.count == undefined ? "Count: 0" : "Count: " + card.count,
          color: null,
          callback: function(t) {
            return t.popup({
              title: "Streak Counter",
              url: "https://trello-prototype.glitch.me/streakcounter.html",
              target: "Trello Landing Page"
            });
          }
        },
        {
          title: "Start Date",
          text: card.startdate == undefined ?"Set Start Date?": card.startdate,
          color: card.startdate ? null : "blue",
          callback: function(t) {
            return t.popup({
              title: "Start Date",
              url: "https://trello-prototype.glitch.me/startdate.html",
              target: "Trello Landing Page"
            });
          }
        },
        {
          title: "Blocked Story",
          text: card.cardName == undefined ? "Set Blocked Story?" : ("Card Blocked by " + card.cardName),
          color: "red",
          callback: function(t) {
            return t.popup({
              title: "Blocked Story",
              url: "https://trello-prototype.glitch.me/blockedStory.html",
              target: "Trello Landing Page"
            });
          }
        }
      ];
    });
  }
});
