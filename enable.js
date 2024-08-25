let en = document.getElementById('en')
en.addEventListener('click', function() {
    chrome.storage.sync.set({on: true}).then(() => {
        color('e');
        console.log("Replacing is on");
    });
});

let dis = document.getElementById('dis')
dis.addEventListener('click', function() {
    chrome.storage.sync.set({on: false}).then(() => {
        color('d');
        console.log("Replacing is off");
    });
});

function color(bu) {
    if (bu == 'e') {
        en.disabled = true;
        dis.disabled = false;
    } else if (bu == 'd') {
        en.disabled = false;
        dis.disabled = true;
    }
}

chrome.storage.sync.get('on', function(data) {
    if (data.on) {
        color('e')
    } else {
        color('d')
    }
});