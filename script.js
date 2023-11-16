

const resetButton = document.querySelector('.c-button');
const deleteButton = document.querySelector('.arrow-button');
const divisionButton = document.querySelector('.divisio-button');
const multiplyButton = document.querySelector('.x-button');
const minusButton = document.querySelector('.minus-button');
const plusButton = document.querySelector('.plus-button');
const equalButton = document.querySelector('.equal-button').innerHTML;
const numbersButtons = document.querySelectorAll('.number');
let input = document.querySelector('.input')
const operationButtons = document.querySelectorAll('.operation')

input.value = '0'
let total = 0;
let lastOperator;
let firstValue;
let secondValue;
let operation;
let result;




numbersButtons.forEach (function (element) {
    element.addEventListener('click', function (event) {
        if (input.value === '0') {
            input.value = event.target.innerHTML;
    } else {
        input.value = input.value + event.target.innerHTML
    }

   
})
})

resetButton.addEventListener ('click', function () {
    if (input.value) {
        input.value = '0'
    }
})

deleteButton.addEventListener('click', function() {
    if (input.value.length === 1) {
        input.value = '0'
    } else {
        input.value = input.value.slice(0 , -1)
    }
})

operationButtons.forEach (function (element) {
    element.addEventListener('click', function (event) {
        if (input.value === '0') {
            return;
        }

        let intInput = parseInt(input.value)
        

        if (total === 0) {
            total = intInput;
        } else {
            doingOperations (intInput)
        }
        lastOperator = element.value;
        
        if(event.target.innerHTML !== '=') 
            {input.value ='0'}
            else  {
                input.value = total;
            }
})
})



function doingOperations (value) {
    if(lastOperator === '+') {
        total = total + value;
        console.log (total)
    } else if (lastOperator === '-') {
        total = total - value;
        console.log (total)
    } else if (lastOperator === 'x') {
        total = total * value
        console.log (total)
    } else if (lastOperator === '÷') {
        total = total / value
        console.log (total)
    } 
}





