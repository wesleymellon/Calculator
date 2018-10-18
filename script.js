function add(n, m){
  return Number(n) + Number(m);
}

function subtract(n, m){
  return Number(n) - Number(m);
}

function multiply(n, m){
  return Number(n) * Number(m);
}

function divide(n, m){
  return Number(n) / Number(m);
}

function operate(operation, n, m){
  return operation(n, m);
}

let expressionArray = [];
let numbers = document.getElementsByClassName("number");
let display = document.getElementById("display");
let allClear = document.getElementById("allClear");
let operators = document.getElementsByClassName("operator");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let decimal = document.getElementById("decimal");

Array.from(numbers).forEach(function(element){
  element.addEventListener("click", function(e){
    expressionArray.push(e.srcElement.innerHTML);
    display.innerHTML = expressionArray.join("");
  });
});

Array.from(operators).forEach(function(element){
  element.addEventListener("click", function(e){
    if(!(expressionArray[0] == undefined) && isNaN(expressionArray[expressionArray.length - 1])){
      expressionArray.pop();
    };
    expressionArray.push(e.srcElement.innerHTML);
    display.innerHTML = expressionArray.join("");
  });
});

clear.addEventListener("click", function(e){
  expressionArray.pop();
  if(expressionArray[0] == undefined){
    display.innerHTML = "0";
  }
  else{
    display.innerHTML = expressionArray.join("");
  }
});

allClear.addEventListener("click", function(e){
  expressionArray = [];
  display.innerHTML = "0";
});

equal.addEventListener("click", function(e){
  let calculatedNumber = calculate(expressionArray);
  if(calculatedNumber == undefined){
    expressionArray = [];
    display.innerHTML = "0";
  }
  else{
    expressionArray = [calculatedNumber];
    display.innerHTML = expressionArray.join("");
  };
});

function calculate(origArray){
  // let numbersArray = origArray.join("").split(/\D+/);
  // let operatorsArray = origArray.join("").split(/\d+/);
  let numbersArray = origArray.join("").split(/[^0-9\.]+/);
  let operatorsArray = origArray.join("").split(/[0-9\.]+/);
  let numbersLength = numbersArray.length;
  let operatorsLength = operatorsArray.length;
  let position = 1;
  let isNegative = false;

  if(/\-/.test(origArray[0])){
    isNegative = true;
    if(typeof origArray[0] == "number"){
      origArray[0] == Math.abs(origArray[0]);
    }
    else{
      origArray.shift();
    };
  }

  if(/[^0-9\.\-]+/.test(origArray[0]) || /[^0-9\.]+/.test(origArray[origArray.length - 1])){
    alert("Please Enter a Valid Mathematical Expression");
    return undefined;
  }

  //Multiplication and Division calculations
  for(i = 1; i < operatorsLength - 1; i++){
    if(operatorsArray[position] == "*"){
      let newElement = multiply(numbersArray[position - 1], numbersArray[position]);

      operatorsArray = exciseElement(operatorsArray, position);
      numbersArray = exciseElement(numbersArray, position - 1);
      numbersArray = exciseElement(numbersArray, position - 1);

      numbersArray = numbersArray.slice(0, position - 1).concat(newElement).concat(numbersArray.slice(position - 1));

      position--;
    }

    else if(operatorsArray[position] == "/"){
      let newElement = divide(numbersArray[position - 1], numbersArray[position]);

      operatorsArray = exciseElement(operatorsArray, position);
      numbersArray = exciseElement(numbersArray, position - 1);
      numbersArray = exciseElement(numbersArray, position - 1);

      numbersArray = numbersArray.slice(0, position - 1).concat(newElement).concat(numbersArray.slice(position - 1));

      position--;
    };

    position++;
  };

  //Addition and Subtraction calculations
  position = 1;

  for(i = 1; i < operatorsLength - 1; i++){

    if(operatorsArray[position] == "+"){
      let newElement = add(numbersArray[position - 1], numbersArray[position]);

      operatorsArray = exciseElement(operatorsArray, position);
      numbersArray = exciseElement(numbersArray, position - 1);
      numbersArray = exciseElement(numbersArray, position - 1);

      numbersArray = numbersArray.slice(0, position - 1).concat(newElement).concat(numbersArray.slice(position - 1));
    }

    if(operatorsArray[position] == "-"){
      let newElement = subtract(numbersArray[position - 1], numbersArray[position]);

      operatorsArray = exciseElement(operatorsArray, position);
      numbersArray = exciseElement(numbersArray, position - 1);
      numbersArray = exciseElement(numbersArray, position - 1);

      numbersArray = numbersArray.slice(0, position - 1).concat(newElement).concat(numbersArray.slice(position - 1));
    }
  };
  return numbersArray[0];

};

function exciseElement(origArray, index){
  return origArray.slice(0, index).concat(origArray.slice(index + 1));
};

function isMultOrDiv(str){
  return /\*|\//.test(str);
}

function isAddOrSub(str){
  return /\+|\-/.test(str);
}
