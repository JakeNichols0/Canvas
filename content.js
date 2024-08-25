let cont = document.getElementById("course_home_content");
let html = `
<div style="width: 100%;height: 25vh;background-image: url('https://hls.harvard.edu/wp-content/uploads/2022/05/CONSTITUTION_iStock-923052552_2500.jpg');background-repeat: no-repeat;background-size: cover;">
    <h1 style="text-align: center;font-weight: bolder;font-size: 50px;color: red;padding-top: 10vh;padding-bottom: 10vh;box-sizing: border-box;background-color: #00000090;height: 25vh;">AP Computer Science</h1>
</div>
<table style="width: 100%;margin-top: 50px;">
  <tbody>
    <tr>
      <td style="width: 50%;"><a href="https://aisdblend.instructure.com/courses/541113/modules"><div style="background-image: url('https://cdn.britannica.com/69/75569-050-7AB67C4B/herm-Socrates-half-original-Greek-Capitoline-Museums.jpg');background-repeat: no-repeat;background-size: cover;border-radius: 25px;width: 100%;height: 500px;">
          </div>
      <h2 style="text-align: center;">Modules</h2></a></td>
      <td style="width: 50%;"><a href="https://aisdblend.instructure.com/courses/541113/modules"><div style="
        background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 25px;
        width: 100%;
        height: 500px;
        "></div>
      <h2 style="text-align: center;">Syllabus</h2></a></td>
    </tr>
  </tbody>
</table>`

window.onload = function() {
    chrome.storage.sync.get('on', function(data) {
        if (data.on) {
            cont.lastElementChild.insertAdjacentHTML("afterend", html);
        }
    });
}