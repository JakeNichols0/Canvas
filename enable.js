//Enable
let en = document.getElementById('en');
en.addEventListener('click', function() {
    chrome.storage.sync.set({on: true}).then(() => {
        color('e');
        console.log("Replacing is on");
    });
});

let dis = document.getElementById('dis');
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

//Theme
let th = document.getElementById("theme");
function dy(dx) {
    let the = th.childNodes;
    for(let i=0; i<the; i++) {
        the[i].selected = false;
    }
    th.value = dx;
}

chrome.storage.sync.get(['theme']).then((data) => {
    console.log("seven " + data.theme)
    dy(data.theme);
});

th.addEventListener("change", function() {
    chrome.storage.sync.set({theme: th.value}, function() {
        console.log("Theme is " + th.value);
    })
})

//Open
document.getElementById('op').addEventListener('click', () => {
    window.open("options.html");
});