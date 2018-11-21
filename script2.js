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
// let decimal = document.getElementById("decimal");
let display = document.getElementById("display");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let allClear = document.getElementById("allClear");

//event listener event.key or something like that

document.addEventListener("keydown", function(e){
  console.log(e);
});

Array.from(numbers).forEach(function(element){
	element.addEventListener("click", function(e){
		expression += e.srcElement.innerHTML;
		display.innerHTML = expression;
	});
});

Array.from(operators).forEach(function(element){
	element.addEventListener("click", function(e){
		expression += e.srcElement.innerHTML;
		display.innerHTML = expression;
	});
});

clear.addEventListener("click", function(e){
	expression = expression.slice(0, expression.length - 1);
	display.innerHTML = expression;
	if(expression == ""){
		display.innerHTML = "0";
	};
})

allClear.addEventListener("click", function(e){
	expression = "";
	display.innerHTML = "0";
})

equal.addEventListener("click", function(e){
	let calculatedNumber = eval(expression);
	expression = calculatedNumber;
	display.innerHTML = expression;
});
