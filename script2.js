function add(n, m){
  return Number(n) + Number(m);
}

function subtract(n, m){
  return n - m;
}

function multiply(n, m){
  return n * m;
}

function divide(n, m){
  return n / m;
}

function operate(n, m, operator){
  return operator(n, m);
}

let expression = "";
let numbers = document.getElementsByClassName("number");
let operators = document.getElementsByClassName("operator");
let decimal = document.getElementById("decimal");
let display = document.getElementById("display");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let allClear = document.getElementById("allClear");

//event listener event.key or something like that

document.addEventListener("keydown", function(e){
  console.log(e);
});