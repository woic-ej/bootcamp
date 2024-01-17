const total_display = document.getElementById("total");
let numbtn = document.querySelectorAll(".num");
let operatorBtn = document.querySelectorAll(".operator");

let operator = "";
let prevnum = "";
let resentvnum = "";
let operatorOn = false;

function handleClick1(e) {
  if (operatorOn) {
    resentvnum += e.target.value;
  }
  total_display.textContent += e.target.value;
}

function handleClick2(e) {
  if (e.target.value === "=") {
    total_display.textContent = "";
    total_display.textContent = calculate(prevnum, operator, resentvnum);
    operator = "";
    prevnum = "";
    resentvnum = "";
    operatorOn = false;
  } else if (e.target.value === "C") {
    total_display.textContent = "";
    operator = "";
    prevnum = "";
    resentvnum = "";
    operatorOn = false;
  } else {
    prevnum = total_display.textContent;
    operator = e.target.value;
    total_display.textContent += e.target.value;
    operatorOn = true;
  }
}

function calculate(n1, operator, n2) {
  let result = 0;
  if (operator === "+") {
    result = parseInt(n1) + parseInt(n2);
  } else if (operator === "-") {
    result = parseInt(n1) - parseInt(n2);
  } else if (operator === "x") {
    result = parseInt(n1) * parseInt(n2);
  } else {
    result = parseInt(n1) / parseInt(n2);
  }
  return result;
}

numbtn.forEach((event) => {
  event.addEventListener("click", handleClick1);
});

operatorBtn.forEach((event) => {
  event.addEventListener("click", handleClick2);
});
