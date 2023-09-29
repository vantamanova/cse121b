/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = document.querySelector("#add1");
    addNumber1 = Number(addNumber1.value);
    
    let addNumber2 = document.querySelector("#add2");
    addNumber2 = Number(addNumber2.value);

    numbersSum = add(addNumber1, addNumber2);
    document.querySelector("#sum").value = numbersSum;
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function(number1, number2) {return number1 - number2};
let subtractNumbers = function() {
    let subNumber1 = Number(document.querySelector("#subtract1").value);
    let subNumber2 = Number(document.querySelector("#subtract2").value);

    numbersSubtraction = subtract(subNumber1, subNumber2);
    document.querySelector("#difference").value = numbersSubtraction;
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;
let multiplyNumbers = () => {
    document.querySelector("#product").value = multiply(Number(document.querySelector("#factor1").value), Number(document.querySelector("#factor2").value));
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;
let divideNumbers = () => {
    document.querySelector("#quotient").value = divide(Number(document.querySelector("#dividend").value), Number(document.querySelector("#divisor").value));
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let date = new Date;
let year = date.getFullYear();

document.querySelector("#year").value = year;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = numbersArr;

/* Output Odds Only Array */
const odds = numbersArr.filter(number => number % 2 === 1);
document.querySelector("#odds").innerHTML = odds;

/* Output Evens Only Array */
const evens = numbersArr.filter(number => number % 2 === 0);
document.querySelector("#evens").innerHTML = evens;

/* Output Sum of Org. Array */
const sumOfArr = numbersArr.reduce((sum, number) => sum + number);
document.querySelector("#sumOfArray").innerHTML = sumOfArr;

/* Output Multiplied by 2 Array */
const multipliedArr = numbersArr.map(number => number * 2);
document.querySelector("#multiplied").innerHTML = multipliedArr;

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = numbersArr.map(number => number * 2).reduce((sum, number) => sum + number);
document.querySelector("#sumOfMultiplied").innerHTML = sumOfMultiplied;

