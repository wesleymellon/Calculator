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
    expressionArray.push(e.srcElement.innerHTML);
    display.innerHTML = expressionArray.join(" ");
  });
});

Array.from(operators).forEach(function(element){
  element.addEventListener("click", function(e){
    console.log(expressionArray[expressionArray.length - 1]);
    if(!(expressionArray[0] == undefined) && isNaN(expressionArray[expressionArray.length - 1])){
      console.log("popping!");
      console.log(`expression array before pop ${expressionArray}`);
      expressionArray.pop();
      console.log(`expression array after pop ${expressionArray}`);
    };
    expressionArray.push(e.srcElement.innerHTML);
    display.innerHTML = expressionArray.join(" ");
  });
});

allClear.addEventListener("click", function(e){
  expressionArray = [];
  display.innerHTML = "0";
});

enter.addEventListener("click", function(e){
  let calculatedNumber = calculate(expressionArray);
  expressionArray = [calculatedNumber];
  display.innerHTML = expressionArray.join(" ");
});

let testArrayPlus = ["5", "+", "6", "*", "3", "/", "2", "0"];
let testArray = ["5", "6", "*", "3", "/", "2", "0"];

function calculate(origArray){
  let numbersArray = origArray.join("").split(/\D+/);
  let operatorsArray = origArray.join("").split(/\d+/);
  let numbersLength = numbersArray.length;
  let operatorsLength = operatorsArray.length;
  let position = 1;

  console.log("before the loop begins");
  console.log(numbersArray);
  console.log(operatorsArray);

  //Multiplication and Division calculations
  for(i = 1; i < operatorsLength - 1; i++){

    console.log(`i = ${i}`);
    console.log(`position = ${position}`);

    if(operatorsArray[position] == "*"){

      console.log(`Found a * position = ${position} and just entered the if statement`);

      console.log(`numberssArray[position - 1] = ${numbersArray[position - 1]}`)
      console.log(`numbersArray[position] = ${numbersArray[position]}`)

      let newElement = multiply(numbersArray[position - 1], numbersArray[position]);

      console.log(` the newElement is equal to ${newElement}`);

      operatorsArray = exciseElement(operatorsArray, position);
      numbersArray = exciseElement(numbersArray, position - 1);
      numbersArray = exciseElement(numbersArray, position - 1);

      numbersArray = numbersArray.slice(0, position - 1).concat(newElement).concat(numbersArray.slice(position - 1));

      position--;
    }

    else if(operatorsArray[position] == "/"){

      console.log(`Found a / position = ${position} and just entered the else if statement`);

      let newElement = divide(numbersArray[position - 1], numbersArray[position]);

      operatorsArray = exciseElement(operatorsArray, position);
      numbersArray = exciseElement(numbersArray, position - 1);
      numbersArray = exciseElement(numbersArray, position - 1);

      numbersArray = numbersArray.slice(0, position - 1).concat(newElement).concat(numbersArray.slice(position - 1));

      position--;
    };

    position++;

    console.log(`end of loop iteration i = ${i}`);
    console.log(`position = ${position}`);
    console.log(numbersArray);
    console.log(operatorsArray);
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

  console.log(`end of the function`);
  console.log(`numbersArray = ${numbersArray}`);
  console.log(`operatorsArray = ${operatorsArray}`);
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
