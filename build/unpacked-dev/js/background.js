!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),(f.fpreview||(f.fpreview={})).exports=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var something = 1;
chrome.browserAction.onClicked.addListener(function() {
  console.log("CLICKED");
  console.log(something);
  chrome.browserAction.getBadgeText({}, function(result) {
    console.log("RESULT: " + result);
    if (result === "x") {
      chrome.browserAction.setBadgeBackgroundColor({"color":[255,0,0,0]});
      chrome.browserAction.setBadgeText({"text": ""});
      something = 1;
    } else {
      chrome.browserAction.setBadgeBackgroundColor({"color":[255,0,0,200]});
      chrome.browserAction.setBadgeText({"text": "x"});
      something = 0;
    }
  });
})

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYmFja2dyb3VuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgc29tZXRoaW5nID0gMTtcbmNocm9tZS5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coXCJDTElDS0VEXCIpO1xuICBjb25zb2xlLmxvZyhzb21ldGhpbmcpO1xuICBjaHJvbWUuYnJvd3NlckFjdGlvbi5nZXRCYWRnZVRleHQoe30sIGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgIGNvbnNvbGUubG9nKFwiUkVTVUxUOiBcIiArIHJlc3VsdCk7XG4gICAgaWYgKHJlc3VsdCA9PT0gXCJ4XCIpIHtcbiAgICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlQmFja2dyb3VuZENvbG9yKHtcImNvbG9yXCI6WzI1NSwwLDAsMF19KTtcbiAgICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7XCJ0ZXh0XCI6IFwiXCJ9KTtcbiAgICAgIHNvbWV0aGluZyA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlQmFja2dyb3VuZENvbG9yKHtcImNvbG9yXCI6WzI1NSwwLDAsMjAwXX0pO1xuICAgICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHtcInRleHRcIjogXCJ4XCJ9KTtcbiAgICAgIHNvbWV0aGluZyA9IDA7XG4gICAgfVxuICB9KTtcbn0pXG4iXX0=
