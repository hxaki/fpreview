var links = document.getElementsByTagName('a');
function mouseOverHandler() {
  "use strict";
  return function () {
    console.log("MOUSED OVER A LINK");
  };
}
for (var i = 0; i<links.length; i++) {
  links[i].addEventListener('onmouseover', mouseOverHandler());
}
