let cont = document.getElementById("course_home_content");
let className = document.getElementsByClassName("ic-Action-header")[0].textContent;
async function haitch() {
  let html = `
  <div class="giveHead" style="background-image: url('${await theme(0)}');">
      <h1 class="classNameH1" style="background-color: #${await theme(3)}; color: ${await theme(4)};">${className}</h1>
  </div>
  <table style="width: 100%;margin-top: 50px;">
    <tbody>
      <tr>
        <td style="width: 50%;">
          <a href="${window.location.href}/modules">
            <div class="navigationDivBackground" style="background-image: url('${await theme(1)}');"></div>
            <h2 style="text-align: center;">Modules</h2>
          </a>
        </td>
        <td style="width: 50%;">
          <a href="${window.location.href}/syllabus">
            <div class="navigationDivBackground" style="background-image: url('${await theme(2)}');"></div>
            <h2 style="text-align: center;">Syllabus</h2>
          </a>
        </td>
      </tr>
    </tbody>
  </table>`
  return html;
}

window.onload = function() {
  chrome.storage.sync.get('on', function(data) {
      if (data.on) {
        haitch().then((html) => {
        if (cont.children[0].id == 'wiki_page_show') {
          cont.children[0].firstElementChild.insertAdjacentHTML("afterend", html);
        } else {
          cont.lastElementChild.insertAdjacentHTML("afterend", html);
        }});
      }
  });
}

async function theme(imgNum) {
  let images = new Map(); 
  images.set("a",["https://hls.harvard.edu/wp-content/uploads/2022/05/CONSTITUTION_iStock-923052552_2500.jpg", 
    "https://cdn.britannica.com/69/75569-050-7AB67C4B/herm-Socrates-half-original-Greek-Capitoline-Museums.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg",
    "00000090", //Bg color
    "beige" //text color
  ]);
  images.set("b",["https://www.pixelstalk.net/wp-content/uploads/2016/07/French-Flag-HD-Wallpaper.jpg",
    "https://www.thespruceeats.com/thmb/HWcoI5bWLjYryC8g44J_imlX3-0=/2100x1428/filters:fill(auto,1)/GettyImages-636741221-e5442b2f0b3a4d33a26ebf7deb237fed.jpg",
    "https://images.pexels.com/photos/587842/pexels-photo-587842.jpeg?cs=srgb&dl=eiffel-tower-france-paris-summer-587842.jpg&fm=jpg",
    "00000080", //Bg color
    "#5ea1ff" //text color
  ]);
  images.set("c",["https://www.ge.com/news/sites/default/files/Reports/2020-03/Wave-3.jpg",
    "https://images.unsplash.com/photo-1527685609591-44b0aef2400b?q=80&w=2233&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1578796388667-fc85c4b0762b?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "ffffff50", //Bg color
    "#047283" //text color
  ]);
  let th = "a";
  await chrome.storage.sync.get('theme').then((data) => {
    th = data.theme;
  });
  console.log("<><><><><><><><><><><>" + images.get(th));
  return images.get(th)[imgNum];
}

chrome.storage.onChanged.addListener((changes, namespace) => {
  window.location.reload();
});