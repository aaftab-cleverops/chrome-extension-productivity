```javascript
// content.js

// Send a message to background.js when a new page is loaded
chrome.runtime.sendMessage({message: "pageLoaded"}, function(response) {
  console.log(response);
});
```