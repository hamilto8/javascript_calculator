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

let num = 4*6;

let displayValue = [];
let output = 0;

addButton.addEventListener('click', ()=>{
  displayValue.push('+');
  display.textContent = displayValue.join("");
});

subtractButton.addEventListener('click',()=>{
  displayValue.push('-');
  display.textContent = displayValue.join("");
});

multiplyButton.addEventListener('click', ()=>{
  displayValue.push('x');
  display.textContent = displayValue.join("");
});

divideButton.addEventListener('click', ()=>{
  displayValue.push("÷");
  display.textContent = displayValue.join("");
});

clear.addEventListener('click', ()=>{
  displayValue = [];
  message.textContent = '';
  display.textContent = displayValue.join("");
});

decimal.addEventListener('click', ()=>{
  displayValue.push('.');
    display.textContent = displayValue.join("");
});

one.addEventListener('click', ()=>{
  if(parseInt(displayValue[displayValue.length-1])){
    displayValue[displayValue.length-1] += '1'
  } else {
    displayValue.push('1');
  }
    display.textContent = displayValue.join("");
});

two.addEventListener('click', ()=>{
  if(parseInt(displayValue[displayValue.length-1])){
    displayValue[displayValue.length-1] += '2'
  } else {
    displayValue.push('2');
  }
    display.textContent = displayValue.join("");
});

three.addEventListener('click', ()=>{
  if(parseInt(displayValue[displayValue.length-1])){
    displayValue[displayValue.length-1] += '3'
  } else {
    displayValue.push('3');
  }
    display.textContent = displayValue.join("");
});

four.addEventListener('click', ()=>{
  if(parseInt(displayValue[displayValue.length-1])){
    displayValue[displayValue.length-1] += '4'
  } else {
    displayValue.push('4');
  }
    display.textContent = displayValue.join("");
});

five.addEventListener('click', ()=>{
  if(parseInt(displayValue[displayValue.length-1])){
    displayValue[displayValue.length-1] += '5'
  } else {
    displayValue.push('5');
  }
    display.textContent = displayValue.join("");
});

six.addEventListener('click', ()=>{
  if(parseInt(displayValue[displayValue.length-1])){
    displayValue[displayValue.length-1] += '6'
  } else {
    displayValue.push('6');
  }
    display.textContent = displayValue.join("");
});

seven.addEventListener('click', ()=>{
  if(parseInt(displayValue[displayValue.length-1])){
    displayValue[displayValue.length-1] += '7'
  } else {
    displayValue.push('7');
  }
    display.textContent = displayValue.join("");
});

eight.addEventListener('click', ()=>{
  if(parseInt(displayValue[displayValue.length-1])){
    displayValue[displayValue.length-1] += '8'
  } else {
    displayValue.push('8');
  }
    display.textContent = displayValue.join("");
});

nine.addEventListener('click', ()=>{
  if(parseInt(displayValue[displayValue.length-1])){
    displayValue[displayValue.length-1] += '9'
  } else {
    displayValue.push('9');
  }
    display.textContent = displayValue.join("");
});

zero.addEventListener('click', ()=>{
  if(parseInt(displayValue[displayValue.length-1])){
    displayValue[displayValue.length-1] += '0'
  } else {
    displayValue.push('0');
  }
    display.textContent = displayValue.join("");
});

special.addEventListener('click', ()=>{
    message.textContent = "You have encountered a special message!";
});

equalsButton.addEventListener('click',()=>{
  for(let i = 0; i < displayValue.length-1; i++){
    if(parseInt(displayValue[0])){

    }
  }
});

function add(...num){
    let sum = 0;
    for(let i = 0; i < num.length; i++){
      sum += num[i];
    }
    return sum;
  }
  
  function subtract(...num){
    let sum = num[0];
    for(let i = 1; i < num.length; i++){
      sum -= num[i];
    }
    return sum;
  }
  
  function multiply(...num){
    let  product = num[0];
    for (let i = 1; i < num.length; i++){
      product *= num[i]
    }
    return product;
  }
  
  function divide(...num){
    let product = num[0];
    for (let i = 1; i < num.length; i++){
      product /= num[i];
    }
    return product;
  }

  function operate(num1, num2, operator){
    if(operator === '+'){
      output = (num1 + num2);
      displayValue = `${output}`;
      display.textContent = displayValue;
    }
  }