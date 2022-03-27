const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const bracketL = document.getElementById("bracketL");
const bracketrR = document.getElementById("bracketR");

const clear = document.getElementById("clear");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const add = document.getElementById("add");
const sub = document.getElementById("substract");
const del = document.getElementById("del");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");

let display = document.getElementById("display");

const clickHandler = (e) => {
  if (e.target.innerText == "C") {
    display.innerText = "";
    return
  } else if (e.target.innerText == "=") {
    try {
      display.innerText = eval(display.innerText);
    } catch {
      display.innerText = "Error";
    }
    return;
  } else if (e.target.innerText == "del") {
    if (display.innerText) {
      display.innerText = display.innerText.slice(0, -1);
    }
    return;
  }
  display.innerText += e.target.innerText;
};

one.addEventListener("click", clickHandler);
two.addEventListener("click", clickHandler);
three.addEventListener("click", clickHandler);
four.addEventListener("click", clickHandler);
five.addEventListener("click", clickHandler);
six.addEventListener("click", clickHandler);
seven.addEventListener("click", clickHandler);
eight.addEventListener("click", clickHandler);
nine.addEventListener("click", clickHandler);
zero.addEventListener("click", clickHandler);
bracketL.addEventListener("click", clickHandler);
bracketrR.addEventListener("click", clickHandler);
sub.addEventListener("click", clickHandler);
add.addEventListener("click", clickHandler);
divide.addEventListener("click", clickHandler);
multiply.addEventListener("click", clickHandler);
clear.addEventListener("click", clickHandler);
dot.addEventListener("click", clickHandler);
del.addEventListener("click", clickHandler);
equal.addEventListener("click", clickHandler);


