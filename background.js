```javascript
let productivityTips = [
    "Take regular breaks for increased productivity.",
    "Set specific goals for your tasks.",
    "Prioritize your tasks based on importance.",
    "Eliminate distractions to stay focused.",
    "Practice mindfulness to improve concentration.",
    "Stay organized with a task management tool.",
    "Avoid multitasking to improve efficiency."
];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "getTip") {
        let randomIndex = Math.floor(Math.random() * productivityTips.length);
        sendResponse({tip: productivityTips[randomIndex]});
    }
});
```