const container = document.querySelector(".container");
const display = document.querySelector("#display");
const clear = document.querySelector(".clear");
const special = document.querySelector(".special");
const decimal = document.querySelector(".decimal");
const backspace = document.querySelector(".backspace");
const power = document.querySelector(".power");
const message = document.querySelector(".message");
const addButton = document.querySelector("div .add");
const equalsButton = document.querySelector("div .equals");
const subtractButton = document.querySelector("div .subtract");
const multiplyButton = document.querySelector("div .multiply");
const divideButton = document.querySelector("div .divide");

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");

let num = 24;
let specialChars = '*+-÷';
let displayValue = [];
let subOps = [];
let output = 0;

addButton.addEventListener('click', addAdditionSymbol);

function addAdditionSymbol(){
  let lastVal = displayValue[displayValue.length-1];
  if(Math.abs(parseFloat(lastVal)) >= 0){
    displayValue.push('+');
  } else {
    displayValue[displayValue.length-1] = "+";
  }
  display.textContent = displayValue.join("");
}

subtractButton.addEventListener('click', addSubtractionSymbol);

function addSubtractionSymbol(){
  let lastVal = displayValue[displayValue.length-1];
  if(Math.abs(parseFloat(lastVal)) >= 0){
    displayValue.push('-');
  } else {
    displayValue[displayValue.length-1] = "-";
  }
  display.textContent = displayValue.join("");
}

multiplyButton.addEventListener('click', addMultiplicationSymbol);

function addMultiplicationSymbol(){
  let lastVal = displayValue[displayValue.length-1];
  if(Math.abs(parseFloat(lastVal)) >= 0){
    displayValue.push('*');
  } else {
    displayValue[displayValue.length-1] = "*";
  }
  display.textContent = displayValue.join("");
}

divideButton.addEventListener('click', addDivisonSymbol);

function addDivisonSymbol(){
  let lastVal = displayValue[displayValue.length-1];
  if(Math.abs(parseFloat(lastVal)) >= 0){
    // division symbol: ÷
    displayValue.push('/');
  } else {
    displayValue[displayValue.length-1] = "/";
  }
  display.textContent = displayValue.join("");
}

clear.addEventListener('click', clearInput);

function clearInput(){
  displayValue = [];
  output = 0;
  message.textContent = '';
  display.textContent = displayValue.join("");
}

function checkChars(str){
  for(let i = 0; i < specialChars.length; i++){
    if(str.includes(specialChars[i])){
      return true;
    } else {
      return false;
    }
  }
}

decimal.addEventListener('click', addDecimal);

function addDecimal(){
  let lastVal = displayValue[displayValue.length-1];
  if(lastVal && !checkChars(lastVal)){
    if(parseFloat(lastVal)){
      displayValue[displayValue.length-1] += '.';
    } else {
      displayValue.push("0.");
    }
  } else if (!displayValue[displayValue.length-1]){
    displayValue.push('0.');
  }
  
  message.textContent = '';
  display.textContent = displayValue.join("");
}

one.addEventListener('click', addOne);

function addOne(){
  let lastVal = displayValue[displayValue.length-1];
  if(displayValue.length === 1 && displayValue[0] === '0'){
    displayValue[0] = 1;
  } else {
    if(typeof lastVal === 'number' || (lastVal !== undefined && lastVal.includes("."))){
      displayValue[displayValue.length-1] += '1';
    } else {
      displayValue.push('1');
    }
  }
  
  message.textContent = '';
  display.textContent = displayValue.join("");
}

two.addEventListener('click', addTwo);

function addTwo(){
  let lastVal = displayValue[displayValue.length-1];

  if(displayValue.length === 1 && displayValue[0] === '0'){
    displayValue[0] = 2;
  } else {
    if(parseFloat(lastVal) || (lastVal !== undefined && lastVal.includes("."))){
      displayValue[displayValue.length-1] += '2';
    } else {
      displayValue.push('2');
    }
  }
  
  message.textContent = '';
  display.textContent = displayValue.join("");
}

three.addEventListener('click', addThree);

function addThree(){
  let lastVal = displayValue[displayValue.length-1];
  if(displayValue.length === 1 && displayValue[0] === '0'){
    displayValue[0] = 3;
  } else {
    if(parseFloat(lastVal) || (lastVal !== undefined && lastVal.includes("."))){
      displayValue[displayValue.length-1] += '3';
    } else {
      displayValue.push('3');
    }
  }
  
  message.textContent = '';
  display.textContent = displayValue.join("");
}

four.addEventListener('click', addFour);

function addFour(){
  let lastVal = displayValue[displayValue.length-1];
  if(displayValue.length === 1 && displayValue[0] === '0'){
    displayValue[0] = 4;
  } else {
    if(parseFloat(lastVal) || (lastVal !== undefined && lastVal.includes("."))){
      displayValue[displayValue.length-1] += '4';
    } else {
      displayValue.push('4');
    }
  }
  
  message.textContent = '';
  display.textContent = displayValue.join("");
}

five.addEventListener('click', addFive);

function addFive(){
  let lastVal = displayValue[displayValue.length-1];
  if(displayValue.length === 1 && displayValue[0] === '0'){
    displayValue[0] = 5;
  } else {
    if(parseFloat(lastVal) || (lastVal !== undefined && lastVal.includes("."))){
      displayValue[displayValue.length-1] += '5';
    } else {
      displayValue.push('5');
    }
  }

  message.textContent = '';
  display.textContent = displayValue.join("");
}

six.addEventListener('click', addSix);

function addSix(){
  let lastVal = displayValue[displayValue.length-1];
  if(displayValue.length === 1 && displayValue[0] === '0'){
    displayValue[0] = 6;
  } else {
    if(parseFloat(lastVal) || (lastVal !== undefined && lastVal.includes("."))){
      displayValue[displayValue.length-1] += '6';
    } else {
      displayValue.push('6');
    }
  }

  message.textContent = '';
  display.textContent = displayValue.join("");
}

seven.addEventListener('click', addSeven);

function addSeven(){
  let lastVal = displayValue[displayValue.length-1];

  if(displayValue.length === 1 && displayValue[0] === '0'){
    displayValue[0] = 7;
  } else {
    if(parseFloat(lastVal) || (lastVal !== undefined && lastVal.includes("."))){
      displayValue[displayValue.length-1] += '7';
    } else {
      displayValue.push('7');
    }
  }
  message.textContent = '';
  display.textContent = displayValue.join("");
}

eight.addEventListener('click', addEight);

function addEight(){
  let lastVal = displayValue[displayValue.length-1];

  if(displayValue.length === 1 && displayValue[0] === '0'){
    displayValue[0] = 8;
  } else {
    if(parseFloat(lastVal) || (lastVal !== undefined && lastVal.includes("."))){
      displayValue[displayValue.length-1] += '8';
    } else {
      displayValue.push('8');
    }
  }
  
  message.textContent = '';
  display.textContent = displayValue.join("");
}

nine.addEventListener('click', addNine);

function addNine(){
  let lastVal = displayValue[displayValue.length-1];

  if(displayValue.length === 1 && displayValue[0] === '0'){
    displayValue[0] = 9;
  } else {
    if(parseFloat(lastVal) || (lastVal !== undefined && lastVal.includes("."))){
      displayValue[displayValue.length-1] += '9';
    } else {
      displayValue.push('9');
    }
  }
  
  message.textContent = '';
  display.textContent = displayValue.join("");
}

zero.addEventListener('click', addZero);

function addZero(){
  let lastVal = displayValue[displayValue.length-1];
  if(displayValue.length === 1 && displayValue[0] === '0'){
    message.textContent = 'You must really love zeros.';
  } else {
    if(parseFloat(lastVal) || (lastVal !== undefined && lastVal.includes("."))){
      displayValue[displayValue.length-1] += '0';
    } else {
      displayValue.push('0');
    }
  }
    display.textContent = displayValue.join("");
}

special.addEventListener('click', ()=>{
    message.textContent = "You have encountered a special message!";
});

equalsButton.addEventListener('click',()=>{
  let lastVal = displayValue[displayValue.length-1];
  const vals = [...displayValue];
  if(displayValue.length >= 3){
    operate(vals);
  } else {
    message.textContent = 'Incorrect Input. Reconsider Your Mathematical Manners, Sir!';
  }
});

backspace.addEventListener("click", backspaceFunction);

function backspaceFunction(){
  let lastVal = displayValue[displayValue.length-1];
  if(lastVal && lastVal.length > 1){
    let newVal = lastVal.slice(0, -1);
    displayValue.pop();
    displayValue.push(newVal);
  } else {
    displayValue.pop();
  }
  display.textContent = displayValue.join("");
}

function divideByZero(){
  for(let i = 0; i < displayValue.length-1; i++){
    if(displayValue[i] === '/' && displayValue[i+1] === '0'){
      return true;
    }
  }
  return false;
}

function add(num1, num2){
    let sum = num1+num2;
    return sum;
  }
  
  function subtract(num1, num2){
    let sum = parseFloat(num1) - parseFloat(num2);
    return sum;
  }
  
  function multiply(num1, num2){
    let  product = num1*num2;
    return product;
  }
  
  function divide(num1, num2){
    let product = num1 / num2;
    return product;
  }

  function operate(){
    if(displayValue.length > 0){
      while(subOps.length < 3){
        if(subOps.length < 3){
          subOps.push(displayValue.shift());
        } 
      }
    } else {
      message.textContent = 'Done!';
    }
    let num1 = parseFloat(subOps[0]);
    let num2 = parseFloat(subOps[2]);
    let exercise = subOps[1];

      if(exercise === "+"){
        output += add(num1,num2);
      } else if (exercise === "-"){
        output += subtract(num1, num2);
      } else if (exercise === "/"){
        output += divide(num1, num2);
      } else if (exercise === "*"){
        output += multiply(num1, num2);
      }
      console.log(output);
      // operate();
   
  }

  window.addEventListener('keyup',(e)=>{

    switch(e.keyCode){
      case 49:
        addOne();
        break;
      case 50:
        addTwo();
        break;
      case 51:
        addThree();
        break;
      case 52:
        addFour();
        break;
      case 53:
        addFive();
        break;
      case 54:
        addSix();
        break;
      case 55:
        addSeven();
        break;
      case 56:
        if(!e.shiftKey){
          addEight();
        } else {
          addMultiplicationSymbol();
        }
        break;
      case 57:
        addNine()
        break;
      case 48:
        addZero();
        break;
      case 191:
        addDivisonSymbol();
        break;
      case 187:
        if(e.shiftKey){
          addAdditionSymbol();
        }
        break;
      case 189:
        addSubtractionSymbol();
        break;
      case 56:
          addMultiplicationSymbol();
        break;
      case 190:
        addDecimal();
        break;
      case 8:
        backspaceFunction();
        break;
      case 13:
        operate();
        break;
      case 27:
        clearInput();
        break;
      default:
        //null
        break;
    }
  });
  