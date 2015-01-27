!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),(f.fpreview||(f.fpreview={})).exports=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var something = 1;
chrome.browserAction.onClicked.addListener(function() {
  console.log("CLICKED");
  chrome.browserAction.getBadgeText({}, function(result) {
    console.log("RESULT: " + result);
    if (result === "x") {
      chrome.browserAction.setBadgeBackgroundColor({"color":[255,0,0,0]});
      chrome.browserAction.setBadgeText({"text": ""});
      chrome.browserAction.enable();
    } else {
      chrome.browserAction.setBadgeBackgroundColor({"color":[255,0,0,200]});
      chrome.browserAction.setBadgeText({"text": "x"});
      chrome.browserAction.disable();
    }
  });
})

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYmFja2dyb3VuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHNvbWV0aGluZyA9IDE7XG5jaHJvbWUuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKFwiQ0xJQ0tFRFwiKTtcbiAgY2hyb21lLmJyb3dzZXJBY3Rpb24uZ2V0QmFkZ2VUZXh0KHt9LCBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICBjb25zb2xlLmxvZyhcIlJFU1VMVDogXCIgKyByZXN1bHQpO1xuICAgIGlmIChyZXN1bHQgPT09IFwieFwiKSB7XG4gICAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZUJhY2tncm91bmRDb2xvcih7XCJjb2xvclwiOlsyNTUsMCwwLDBdfSk7XG4gICAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoe1widGV4dFwiOiBcIlwifSk7XG4gICAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5lbmFibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3Ioe1wiY29sb3JcIjpbMjU1LDAsMCwyMDBdfSk7XG4gICAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoe1widGV4dFwiOiBcInhcIn0pO1xuICAgICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uZGlzYWJsZSgpO1xuICAgIH1cbiAgfSk7XG59KVxuIl19
