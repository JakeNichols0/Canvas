let cont = document.getElementById("course_home_content");
let className = document.getElementsByClassName("ic-Action-header")[0].textContent;
let html = `
<div style="width: 100%;height: 25vh;background-image: url('${theme(0)}');background-repeat: no-repeat;background-size: cover;">
    <h1 class="classNameH1">${className}</h1>
</div>
<table style="width: 100%;margin-top: 50px;">
  <tbody>
    <tr>
      <td style="width: 50%;">
        <a href="${window.location.href}/modules">
          <div class="navigationDivBackground" style="background-image: url('${theme(1)}');"></div>
          <h2 style="text-align: center;">Modules</h2>
        </a>
      </td>
      <td style="width: 50%;">
        <a href="${window.location.href}/syllabus">
          <div class="navigationDivBackground" style="background-image: url('${theme(2)}');"></div>
          <h2 style="text-align: center;">Syllabus</h2>
        </a>
      </td>
    </tr>
  </tbody>
</table>`

window.onload = function() {
  chrome.storage.sync.get('on', function(data) {
      if (data.on) {
        if (cont.children[0].id == 'wiki_page_show') {
          cont.children[0].firstElementChild.insertAdjacentHTML("afterend", html);
        } else {
          cont.lastElementChild.insertAdjacentHTML("afterend", html);
        }
      }
  });
}

function theme(imgNum) {
  let images = new Map(); 
  images.set("a",["https://hls.harvard.edu/wp-content/uploads/2022/05/CONSTITUTION_iStock-923052552_2500.jpg", 
    "https://cdn.britannica.com/69/75569-050-7AB67C4B/herm-Socrates-half-original-Greek-Capitoline-Museums.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg"]);
  images.set("b",[]);
  images.set("c",[]);
  let th;
  chrome.storage.sync.get('theme', function(data) {
    th = data.theme;
    return images.get(th)[imgNum];
  });
}