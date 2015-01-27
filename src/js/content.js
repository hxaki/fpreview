var links = document.getElementsByTagName('a');
var request = require('request');
function mouseOverHandler() {
  "use strict";
  return function () {
    console.log("MOUSED OVER A LINK");
  };
}
for (var i = 0; i<links.length; i++) {
  links[i].addEventListener('mouseover', mouseOverHandler());
  request('https://api.fakku.net', function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  });
}
