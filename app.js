// DOM manipulation
const allBtn = document.querySelectorAll(".botton");
const render = document.querySelector(".top-area");
const reset = document.querySelector(".botton-reset");
const resultBtn = document.querySelector(".button-equal");
const delBtn = document.querySelector(".botton-del");
const athBtn = document.querySelectorAll(".arithmetic");

// setting default Arithemetics key values
let addClicked = false;
let subClicked = false;
let divClicked = false;
let mulClicked = false;
let data = [];

// Event function for Number buttons
allBtn.forEach(function (val) {
  val.addEventListener("click", calculate);
});

// calculation function
function calculate(event) {
  var target = event.target.innerHTML;
  render.textContent += target;
}

// Event function for Arth keys
athBtn.forEach(function (val) {
  val.addEventListener("click", arithmetic);
});

// Reseting bolean values of arths keys
function arithmetic(event) {
  var getTo = event.target.innerHTML;
  if (getTo === "+") {
    addClicked = true;
    subClicked = false;
    mulClicked = false;
    divClicked = false;
  } else if (getTo === "-") {
    subClicked = true;
    addClicked = false;
    mulClicked = false;
    divClicked = false;
  } else if (getTo === "/") {
    divClicked = true;
    subClicked = false;
    mulClicked = false;
    addClicked = false;
  } else if (getTo === "*") {
    mulClicked = true;
    subClicked = false;
    addClicked = false;
    divClicked = false;
  }
  var output = parseFloat(render.innerHTML);
  data.push(output);
  render.textContent = "";
}

// Event function for reault btn
resultBtn.addEventListener("click", result);
function result() {
  let addRender = 0;
  // let divRender = 0;
  console.log(data);

  var output = parseFloat(render.innerHTML);
  data.push(output);
  console.log(data);

  // Conditional statement for addition function
  if (addClicked == true) {
    for (let index = 0; index < data.length; index++) {
      addRender += data[index];
    }
    render.textContent = addRender;
    data = [];
    addClicked = false;

    //  Conditional statement for subtraction function
  } else if (subClicked == true) {
    let subRender = data.reduce((a, b) => a - b);
    render.textContent = subRender;
    data = [];
    subClicked = false;
  }
  //  Conditional statement for division function
  else if (divClicked == true) {
    let divRender = data.reduce((a, b) => a / b);
    // let newRender = divRender.toFixed(10);
    render.textContent = divRender;
    data = [];
    divClicked = false;
  }

  //  Conditional statement for multiplication function
  else {
    let mulRender = data.reduce((a, b) => a * b);
    render.textContent = mulRender;
    data = [];
    mulClicked = false;
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
