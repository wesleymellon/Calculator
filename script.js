function add(n, m){
  return n + m;
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

function operate(operation, n, m){
  return operation(n, m);
}

let expressionArray = [];
let numbers = document.getElementsByClassName("number");
let display = document.getElementById("display");
let allClear = document.getElementById("clear");
let operators = document.getElementsByClassName("operator");
let enter = document.getElementById("enter");

Array.from(numbers).forEach(function(element){
  element.addEventListener("click", function(e){
    console.log(e.srcElement.innerHTML);
    expressionArray.push(e.srcElement.innerHTML);
    display.innerHTML = expressionArray.join(" ");
  });
});

Array.from(operators).forEach(function(element){
  element.addEventListener("click", function(e){
    console.log(e.srcElement.innerHTML);
    expressionArray.push(e.srcElement.innerHTML);
    display.innerHTML = expressionArray.join(" ");
  });
});

allClear.addEventListener("click", function(e){
  expressionArray = [];
  display.innerHTML = "0";
});

// enter.addEventListener("click", function(e){
//   expressionArray.reduce
// });

function foo(origArray){
  let numbersArray = [];
  let operatorsArray = [];
  origArray.forEach(function(e){
  });
};

