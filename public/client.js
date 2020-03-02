/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON =
  "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421";
var GREY_ROCKET_ICON =
  "https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717";
var WHITE_ROCKET_ICON =
  "https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Fwhite-rocket-ship.png?1495811896182";

TrelloPowerUp.initialize({
  /*||--------------------------------------||
    ||  C  A  R  D   B  U  T  T  O  N  S    ||
    ||Appear on the right hand side of cards||
    ||--------------------------------------||*/
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
            url: "https://trello-prototype.glitch.me/startdate.js"
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

  /*-------------------------------------------------/
  /            C  A  R  D    B  A  D  G  E  S        /        
  /       The ones that appear on the dashboard      /
  /--------------------------------------------------*/
  "card-badges": function(t, options) {
    return t.get("card", "shared", "priority").then(function(priority, None) {
      return [
        {
          icon: priority ? GREY_ROCKET_ICON : null,
          text: priority || "",
          color: priority ? "green" : null
        }
      ];
    });
  //   return t.get("card", "shared", "taskpoint").then(function(None, taskpoint) {
  //     //Check if this is how you do this
  //     return [
  //       {
  //         icon: taskpoint ? GREY_ROCKET_ICON : null,
  //         text: taskpoint || "",
  //         color: taskpoint ? "green" : null
  //       }
  //     ];
  //   });
  // },
  },

  
  /*-------------------------------------------------|
  |    C  A  R  D   D E T A I L   B  A  D  G  E  S   |        
  |   The ones that appear on the top of a card      |
  |-------------------------------------------------*/

  // "card-detail-badges": function(t, options) {
  //   return t.get("card", "shared", "priority").then(function(priority) {
  //     return [
  //       {
  //         title: "Priority",
  //         text: priority || "Set Priortiy?",
  //         color: priority ? null : "blue",
  //         callback: function(t) {
  //           return t.popup({
  //             title: "Priority",
  //             url: "https://trello-prototype.glitch.me/priority.html",
  //             target: "Trello Landing Page"
  //           });
  //         }
  //       }
  //     ];
  //   }); 
    // return t.get("card", "shared", "taskpoint").then(function(taskpoint) {
    //   return [
    //     {
    //       title: "Task Point",
    //       text: taskpoint || "Set Task Estimate?",
    //       color: taskpoint ? null : "blue",
    //       callback: function(t) {
    //         return t.popup({
    //           title: "Task Point",
    //           url: "https://trello-prototype.glitch.me/taskpoint.html",
    //           target: "Trello Landing Page"
    //         });
    //       }
    //     }
    //   ];
    // });
//   }
 });
