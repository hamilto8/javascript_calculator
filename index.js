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
const squareRootButton = document.querySelector(".squareRootButton");
const percentButton = document.querySelector(".percent");
const memoryClearButton = document.querySelector(".memoryClear");
const memoryAddButton = document.querySelector(".memoryAdd");
const memoryRemoveButton = document.querySelector(".memoryRemove");

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
let output = 0;
let memoryValue = 0;

addButton.addEventListener('click', addAdditionSymbol);

function addAdditionSymbol(){
  let lastVal = displayValue[displayValue.length-1];
  if(Math.abs(parseFloat(lastVal)) >= 0){
    displayValue.push('+');
  } else {
    displayValue[displayValue.length-1] = "+";
  }
  display.textContent = displayValue.join("");
  length = displayValue.length-1;
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
  length = 0;
  displayValue = [];
  output = 0;
  subOps = [];
  message.textContent = '';
  display.textContent = displayValue.join("");
}

function checkChars(str){
  let state = false;
  for(let i = 0; i < specialChars.length; i++){
    if(str.includes(specialChars[i])){
      state = true;
    }
  }
  return state;
}

decimal.addEventListener('click', addDecimal);

function addDecimal(){
  if(checkChars(displayValue[displayValue.length-1])){
    displayValue.push("0.");
  } else if (!displayValue[displayValue.length-1].includes(".")) {
    displayValue[displayValue.length-1] += '.';
  }

  message.textContent = '';
  display.textContent = displayValue.join("");
}

one.addEventListener('click', addOne);

function addOne(){
  let lastVal = displayValue[displayValue.length-1];
  if(displayValue[displayValue.length-1] === '0'){
    displayValue[displayValue.length-1] = '1';
  } else {
    if(typeof lastVal === 'number' || (lastVal !== undefined && lastVal.includes("."))){
      displayValue[displayValue.length-1] += '1';
    } else {
      displayValue.push('1');
    }
  }
  
  message.textContent = '';
  display.textContent = displayValue.join("");
  length = displayValue.length-1;
}

two.addEventListener('click', addTwo);

function addTwo(){
  let lastVal = displayValue[displayValue.length-1];

  if(displayValue[displayValue.length-1] === '0'){
    displayValue[displayValue.length-1] = '2';
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

  if(displayValue[displayValue.length-1] === '0'){
    displayValue[displayValue.length-1] = '3';
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

  if(displayValue[displayValue.length-1] === '0'){
    displayValue[displayValue.length-1] = '4';
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

  if(displayValue[displayValue.length-1] === '0'){
    displayValue[displayValue.length-1] = '5';
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

  if(displayValue[displayValue.length-1] === '0'){
    displayValue[displayValue.length-1] = '6';
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

  if(displayValue[displayValue.length-1] === '0'){
    displayValue[displayValue.length-1] = '7';
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

  if(displayValue[displayValue.length-1] === '0'){
    displayValue[displayValue.length-1] = '8';
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
  if(displayValue[displayValue.length-1] === '0'){
    displayValue[displayValue.length-1] = '9';
  } else {
    if(parseFloat(lastVal) || (lastVal !== undefined && lastVal.includes("."))){
      displayValue[displayValue.length-1] += '9';
    } else {
      displayValue.push('9');
    }
  }
  
  message.textContent = '';
  display.textContent = displayValue.join("");
  length = displayValue.length-1;
}

zero.addEventListener('click', addZero);

function addZero(){
  let lastVal = displayValue[displayValue.length-1];
  if(displayValue[displayValue.length-1] === '0'){
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
    message.textContent = "This calculator button is reserved for VIPS. Dress Nicely.";
});

equalsButton.addEventListener('click', equalsButtonFunction);

function equalsButtonFunction(){
  length = displayValue.length;
  count = 0;
  if(displayValue.length >= 3){
    if(divideByZero() === true){
      message.textContent = 'Sir! Division by zero is most impolite.';
    } else{
        operate(displayValue);
    }
  } else {
    message.textContent = 'Incorrect Input. Reconsider Your Mathematical Manners, Sir.';
  }
}

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
  let state = false;
  for(let i = 0; i < displayValue.length-1; i++){
    if(displayValue[i] === '/' && displayValue[i+1] === '0'){
      state = true;
      break;
    }
  }
  return state;
}

function add(num1, num2){
    let sum = parseFloat(num1) + parseFloat(num2);
    if(sum === parseInt(sum)){
      return sum
    } else {
      return sum.toFixed(2);
    }
  }
  
  function subtract(num1, num2){
    let sum = parseFloat(num1) - parseFloat(num2);
    if(sum === parseInt(sum)){
      return sum;
    } else {
      return sum.toFixed(2);
    }
  }
  
  function multiply(num1, num2){
    let  product = parseFloat(num1) * parseFloat(num2);
    if(product === parseInt(product)){
      return product;
    } else {
      return product.toFixed(2);
    }
  }
  
  function divide(num1, num2){
    let product = parseFloat(num1) / parseFloat(num2);
    if(product === parseInt(product)){
      return product;
    } else {
      return product.toFixed(2);
    }
  }

  function renderOutput(){
    displayValue = [`${output}`];
    display.textContent = displayValue.join("");
  }

  function operate(){
    for(let i = 0; i < displayValue.length; i++){
      switch(displayValue[i]){
        case '+':
          output = add(displayValue[i-1], displayValue[i+1]);
          displayValue[i+1] = output;
          break;
        case '-':
            output = subtract(displayValue[i-1], displayValue[i+1]);
            displayValue[i+1] = output;
            break;
        case '*':
            output = multiply(displayValue[i-1], displayValue[i+1]);
            displayValue[i+1] = output;
            break;
        case '/':
            output = divide(displayValue[i-1], displayValue[i+1]);
            displayValue[i+1] = output;
            break;
        default:
          break;
      }
    }
    renderOutput(); 
  }

  squareRootButton.addEventListener('click', findSquareRoot);

  function findSquareRoot(){
    let lastVal = displayValue[displayValue.length-1];
    if(parseFloat(lastVal) !== NaN){
      displayValue.pop();
      let newVal = Math.sqrt(parseFloat(lastVal));
      if (newVal === parseInt(newVal)){
        displayValue.push(newVal);
      } else {
        displayValue.push(newVal.toFixed(2));
      }
      display.textContent = displayValue.join("");
    }
  }

  percentButton.addEventListener('click', findPercent);

  function findPercent(){
    let lastVal = displayValue[displayValue.length-1];
    if(parseFloat(lastVal) !== NaN){
      displayValue.pop();
      let newVal = parseFloat(lastVal)/100;
      if (newVal === parseInt(newVal)){
        displayValue.push(newVal);
      } else {
        displayValue.push(newVal.toFixed(2));
      }
      display.textContent = displayValue.join("");
    }
  }

  memoryClearButton.addEventListener('click', clearMemory);

  function clearMemory(){
    memoryValue = 0;
  }

  memoryAddButton.addEventListener('click', addToMemory);

  function addToMemory(){
    let lastVal = displayValue[displayValue.length-1];
    if(parseFloat(lastVal) !== NaN){
      memoryValue += parseFloat(lastVal);
    }
  }

  memoryRemoveButton.addEventListener('click', removeFromMemory);

  function removeFromMemory(){
    let lastVal = displayValue[displayValue.length-1];
    if(parseFloat(lastVal) !== NaN){
      memoryValue -= parseFloat(lastVal);
    }
  }

  window.addEventListener('keyup',(e)=>{
    switch(e.keyCode){
      case 49:
        addOne();
        one.style.backgroundColor = 'azure';
        break;
      case 50:
        addTwo();
        two.style.backgroundColor = 'azure';
        break;
      case 51:
        addThree();
        three.style.backgroundColor = 'azure';
        break;
      case 52:
        addFour();
        four.style.backgroundColor = 'azure';
        break;
      case 53:
        addFive();
        five.style.backgroundColor = 'azure';
        break;
      case 54:
        addSix();
        six.style.backgroundColor = 'azure';
        break;
      case 55:
        addSeven();
        seven.style.backgroundColor = 'azure';
        break;
      case 56:
        if(!e.shiftKey){
          addEight();
          eight.style.backgroundColor = 'azure';
        } else {
          multiplyButton.style.backgroundColor = 'rgb(255, 138, 138)';
          addMultiplicationSymbol();
        }
        break;
      case 57:
        addNine()
        nine.style.backgroundColor = 'azure';
        break;
      case 48:
        addZero();
        zero.style.backgroundColor = 'azure';
        break;
      case 191:
        addDivisonSymbol();
        divideButton.style.backgroundColor = 'rgb(255, 138, 138)';
        break;
      case 187:
        if(e.shiftKey){
          addButton.style.backgroundColor = 'rgb(255, 138, 138)';
          addAdditionSymbol();
        }
        break;
      case 189:
        subtractButton.style.backgroundColor = 'rgb(255, 138, 138)';
        addSubtractionSymbol();
        break;
      case 190:
        decimal.style.backgroundColor = 'azure';
        addDecimal();
        break;
      case 8:
        backspace.style.backgroundColor = 'azure';
        backspaceFunction();
        break;
      case 13:
        equalsButton.style.backgroundColor = 'rgb(255, 138, 138)';
        equalsButtonFunction();
        break;
      case 27:
        clear.style.backgroundColor = 'rgb(255, 138, 138)';
        clearInput();
        break;
      default:
        //null
        break;
    }
  });

  window.addEventListener('keydown',(e)=>{
    switch(e.keyCode){
      case 49:
        one.style.backgroundColor = 'antiquewhite';
        break;
      case 50:
        two.style.backgroundColor = 'antiquewhite';
        break;
      case 51:
        three.style.backgroundColor = 'antiquewhite';
        break;
      case 52:
        four.style.backgroundColor = 'antiquewhite';
        break;
      case 53:
        five.style.backgroundColor = 'antiquewhite';
        break;
      case 54:
        six.style.backgroundColor = 'antiquewhite';
        break;
      case 55:
        seven.style.backgroundColor = 'antiquewhite';
        break;
      case 56:
        if(!e.shiftKey){
          eight.style.backgroundColor = 'antiquewhite';
        } else {
          multiplyButton.style.backgroundColor = 'antiquewhite';
        }
        break;
      case 57:
        nine.style.backgroundColor = 'antiquewhite';
        break;
      case 48:
        zero.style.backgroundColor = 'antiquewhite';
        break;
      case 191:
        divideButton.style.backgroundColor = 'antiquewhite';
        break;
      case 187:
        if(e.shiftKey){
          addButton.style.backgroundColor = 'antiquewhite';
        }
        break;
      case 189:
        subtractButton.style.backgroundColor = 'antiquewhite';
        break;
      case 190:
        decimal.style.backgroundColor = 'antiquewhite';
        break;
      case 8:
        backspace.style.backgroundColor = 'antiquewhite';
        break;
      case 13:
        equalsButton.style.backgroundColor = 'antiquewhite';
        break;
      case 27:
        clear.style.backgroundColor = 'antiquewhite';
        break;
      default:
        //null
        break;
    }
  });
  
  