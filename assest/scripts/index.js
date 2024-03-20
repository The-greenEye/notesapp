let create = document.getElementById("create");
let edit = document.getElementById("edit");
let don = document.getElementById("done");
let save = document.getElementById("save");
let title = document.getElementById("title");
let des = document.getElementById("The-boos-To-Creater");
let tex = document.querySelector(".The-Incloudes");

create.onclick = function () {
  cartona2.style.display = "none";
  tex.removeAttribute("hidden");
  save.removeAttribute("hidden");
};

let data = [];
if (localStorage.dataFromNot != null) {
  data = JSON.parse(localStorage.dataFromNot);
} else {
  data = [];
}

save.onclick = function () {
  let dataInput = {
    title: title.value,
    description: des.value,
  };
  data.push(dataInput);
  localStorage.dataFromNot = JSON.stringify(data);
  showData(data);
  cleareInput();
  location.reload(true);
};

function cleareInput() {
  title.value = "";
  des.value = "";
}

function showData(rar) {
  let dataMaxBro = "";
  for (let i = 0; i < rar.length; i++) {
    dataMaxBro += `
    <div class="card col-lg-6 col-12 ml-lg-0 ml-2 mb-2" id="card" name="${i + 1}">
    <i class="material-icons card-top" onclick="donn(${i})">check</i>
    <div class="card-body col-lg-6">
    <h1 class="card-title">${rar[i].title}</h1>
    <p class="card-text">${rar[i].description}</p>
    </div>
    <i class="material-icons card-top" onclick="upDateData(${i})">edit</i>
    </div>

    `;
  }
  cartona2.innerHTML = dataMaxBro;
}
showData(data);

function donn(e) {
  data.splice(e, 1);
  localStorage.dataFromNot = JSON.stringify(data);
  showData(data);
}
function upDateData(n) {
  title.value = data[n].title;
  des.value = data[n].description;
  data.splice(n, 1);
  localStorage.dataFromNot = JSON.stringify(data);
  cartona2.style.display = "none";
  tex.removeAttribute("hidden");
  save.removeAttribute("hidden");
}
