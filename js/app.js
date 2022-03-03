let a = +prompt();
let c = prompt();
let b = +prompt();

let output = document.getElementById("output");

if (c === "+") {
  output.innerHTML = a + b;
} else if (c === "-") {
  output.innerHTML = a - b;
} else if (c === "*") {
  output.innerHTML = a * b;
} else if (c === "/") {
  output.innerHTML = a / b;
} else if (c === "%") {
  output.innerHTML = a % b;
} else if (c === "^") {
  output.innerHTML = a ** b;
} else {
  alert("Введи нормальные значения ЧЕРТ");
}
