const allBtn = document.querySelectorAll(".botton");
const render = document.querySelector(".top-area");
const reset = document.querySelector(".botton-reset");
const resultBtn = document.querySelector(".button-equal");
const delBtn = document.querySelector(".botton-del");
const athBtn = document.querySelectorAll(".arithmetic");

let addClicked = false;
let subClicked = false;
let divClicked = false;
let mulClicked = false;
let data = [];

allBtn.forEach(function (val) {
  val.addEventListener("click", calculate);
});

function calculate(event) {
  var target = event.target.id;
  render.textContent += target;
  console.log(render);
  console.log(render.innerHTML);
}

athBtn.forEach(function (val) {
  val.addEventListener("click", arithmetic);
});

function arithmetic(para) {
  var getTo = para.target.id;
  console.log(typeof getTo);
  if (getTo === "+") {
    addClicked = true;
  } else if (getTo === "-") {
    subClicked = true;
  } else if (getTo === "/") {
    divClicked = true;
  } else if (getTo === "*") {
    mulClicked = true;
  }
  var output = parseInt(render.innerHTML);
  data.push(output);
  console.log(data);
  render.textContent = "";
}

resultBtn.addEventListener("click", result);
function result() {
  let addRender = 0;
  let mulRender = 1;
  let divRender = 0;
  let subRender = 0;

  var output = parseInt(render.innerHTML);
  data.push(output);
  console.log(data);

  if (addClicked == true) {
    for (let index = 0; index < data.length; index++) {
      addRender += data[index];
    }
    render.textContent = addRender;
  } else if (subClicked == true) {
    for (let index = 0; index < data.length; index++) {
      subRender += data[0] - data[1];
    }
    render.textContent = subRender;
  } else if (divClicked == true) {
    divRender += data[0] / data[1];
    let newRender = divRender.toFixed(7);
    render.textContent = newRender;
  } else if (mulClicked == true) {
    for (let index = 0; index < data.length; index++) {
      mulRender *= data[index];
    }
    render.textContent = mulRender;
  }
}

reset.addEventListener("click", function clear() {
  render.textContent = "";
  data.length = 0;
  addClicked = false;
  subClicked = false;
  mulClicked = false;
  divClicked = false;
});

delBtn.addEventListener("click", del);

function del() {
  let present = render.innerHTML;
  render.innerHTML = present.slice(0, -1);
}
