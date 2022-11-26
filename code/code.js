function buttons(anyVal) {}

const currentOutput = document.querySelector(".current-output");
const previousOutput = document.querySelector(".previous-output");
const numbers = document.querySelectorAll(".btnNumber");
const btnComma = document.querySelector(".comma");
const btnAll = document.querySelectorAll("button");
const allClear = document.getElementById("allClear");
const btnDelete = document.querySelector(".btnDelete");
const operators = document.querySelectorAll(".btnOperation");
const equal = document.querySelector(".btnEquals");

numbers.forEach(function (number) {
  number.addEventListener("click", function () {
    if (currentOutput.textContent.length > 15) return;
    currentOutput.textContent += number.textContent;
  });
});

operators.forEach(function (operator) {
  operator.addEventListener("click", function () {
    currentOutput.innerHTML += operator.textContent;
  });
});

allClear.addEventListener("click", function (allClear) {
  currentOutput.innerHTML = [""];
  previousOutput.innerHTML = [""];
});

btnDelete.addEventListener("click", function () {
  currentOutput.innerHTML = currentOutput.innerHTML.slice(0, -1);
});

equal.addEventListener("click", function () {
  try {
    previousOutput.innerText = eval(currentOutput.innerText);
  } catch (error) {
    previousOutput.innerText = "Error";
  }
});
