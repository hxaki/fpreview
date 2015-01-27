var something = 1;
chrome.browserAction.onClicked.addListener(function() {
  console.log("CLICKED");
  chrome.browserAction.getBadgeText({}, function(result) {
    console.log("RESULT: " + result);
    if (result === "x") {
      chrome.browserAction.setBadgeBackgroundColor({"color":[255,0,0,0]});
      chrome.browserAction.setBadgeText({"text": ""});
    } else {
      chrome.browserAction.setBadgeBackgroundColor({"color":[255,0,0,200]});
      chrome.browserAction.setBadgeText({"text": "x"});
    }
  });
})
