```javascript
document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.sendMessage({type: "getTip"}, function(response) {
        document.getElementById('tipContainer').textContent = response.tip;
    });
});
```