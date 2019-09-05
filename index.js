const container = document.querySelector(".container");
const display = document.querySelector("#display");
const clear = document.querySelector(".clear");
const special = document.querySelector(".special");
const decimal = document.querySelector(".decimal");
const backspace = document.querySelector(".backspace");
const power = document.querySelector(".power");
const message = document.querySelector(".message");
let num = 4*6;

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

let displayValue = '';


clear.addEventListener('click', ()=>{
  displayValue = '';
  message.textContent = '';
  display.textContent = displayValue;
});

decimal.addEventListener('click', ()=>{
  displayValue += '.'
    display.textContent = displayValue;
});

one.addEventListener('click', ()=>{
  displayValue+= 1;
    display.textContent = displayValue;
});

two.addEventListener('click', ()=>{
  displayValue +=2;
    display.textContent = displayValue;
});

three.addEventListener('click', ()=>{
  displayValue  += 3; 
    display.textContent = displayValue;
});

four.addEventListener('click', ()=>{
  displayValue += 4;
    display.textContent = displayValue;
});

five.addEventListener('click', ()=>{
  displayValue += 5;
    display.textContent = displayValue;
});

six.addEventListener('click', ()=>{
  displayValue += 6;
    display.textContent = displayValue;
});

seven.addEventListener('click', ()=>{
  displayValue += 7;
    display.textContent = displayValue;
});

eight.addEventListener('click', ()=>{
  displayValue += 8;
    display.textContent = displayValue;
});

nine.addEventListener('click', ()=>{
  displayValue += 9;
    display.textContent = displayValue;
});

zero.addEventListener('click', ()=>{
  displayValue += 0;
    display.textContent = displayValue;
});

special.addEventListener('click', ()=>{
    message.textContent = "You have encountered a special message!";
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

  function operate(num1, num2){

  }