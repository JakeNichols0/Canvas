chrome.runtime.onInstalled.addlistener(() => {
    chrome.storage.sync.set({on: false}, () => {
        console.log("Replacing is off.");
    });
    chrome.storage.sync.set({theme: "a"}, () => {
        console.log("Theme is a.");
    });
    chrome.storage.sync.set({spin: true}, () => {
        console.log("Spinning is enabled.");
    });
})