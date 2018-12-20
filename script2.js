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

let acceptedExpressionValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "."];
let expression = "";
let numbers = document.getElementsByClassName("number");
let operators = document.getElementsByClassName("operator");
let displayText = document.getElementById("displayText");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let allClear = document.getElementById("allClear");

document.addEventListener("keydown", function(e){
  if(acceptedExpressionValues.includes(e.key)){
    expression += e.key;
    displayText.innerHTML = expression;
  }

  else if(e.key === "Backspace"){
    expression = expression.toString();
    expression = expression.slice(0, expression.length - 1);
    displayText.innerHTML = expression;
    if(expression == ""){
      displayText.innerHTML = "0";
    };
  }

  else if(e.key === "Enter"){
    let calculatedNumber = eval(expression);
    expression = calculatedNumber;
    displayText.innerHTML = expression;
  }
});

Array.from(numbers).forEach(function(element){
	element.addEventListener("click", function(e){
		expression += e.srcElement.innerHTML;
		displayText.innerHTML = expression;
	});
});

Array.from(operators).forEach(function(element){
	element.addEventListener("click", function(e){
		expression += e.srcElement.innerHTML;
		displayText.innerHTML = expression;
	});
});

clear.addEventListener("click", function(e){
	expression = expression.slice(0, expression.length - 1);
	displayText.innerHTML = expression;
	if(expression == ""){
		displayText.innerHTML = "0";
	};
})

allClear.addEventListener("click", function(e){
	expression = "";
	displayText.innerHTML = "0";
})

equal.addEventListener("click", function(e){
	let calculatedNumber = eval(expression);
	expression = calculatedNumber;
	displayText.innerHTML = expression;
});
