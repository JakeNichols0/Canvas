chrome.runtime.onInstalled.addlistener(function() {
    chrome.storage.sync.set({on: false}, function() {
        console.log("Replacing is off");
    })
})