let on = document.getElementById('on');

chrome.storage.sync.get(['on']).then((data) => {
    if(data.on) {
        on.value = 1;
    } else {
        on.value = 0;
    }
});

on.addEventListener('change', function() {
    chrome.storage.sync.set({on: Boolean(parseInt(on.value))}).then(() => {
        console.log("Replacing has been changed to" + Boolean(parseInt(on.value)));
    });
});