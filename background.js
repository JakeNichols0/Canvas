chrome.runtime.onInstalled.addlistener(function() {
    chrome.storage.sync.set({on: false}, function() {
        console.log("Replacing is off");
    })
    chrome.storage.sync.set({theme: "a"}, function() {
        console.log("Theme is a");
    })
})