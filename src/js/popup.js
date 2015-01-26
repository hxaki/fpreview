chrome.browserAction.onClicked.addListener(function() {
  chrome.browserAction.setBadgeBackgroundColor({"color":[255,0,0,200]});
  chrome.browserAction.setBadgeText({"text": "x"});
})
