//selectam butoanele pe categorii si le salvam in variabile
//definim functii pt operatiunile de adunare, scadere, inmultire, impartire
//ascultam click-urile si facem logica pt fiecare operatiune posibila

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


let firstValue;
let secondValue;
let operation;
let result;

numbersButtons.forEach (function (element) {
    element.addEventListener('click', function (event) {
        if (result) {
            input.value = '';
            result = undefined;
    }

    input.value = input.value + event.target.innerHTML
})
})

resetButton.addEventListener ('click', function () {
    if (input.value) {
        input.value = ''
    }
})

deleteButton.addEventListener('click', function() {
    if (input.value) {
        input.value = input.value.slice(0 , -1)
    }
})

operationButtons.forEach (function (element) {
    element.addEventListener('click', function (event) {
        if (element.value === '+' || element.value === '-' || 
        element.value === 'x' || element.value === '÷') {
        firstValue = input.value
        input.value = ''
        operation = element.value
    } else if (element.value === '=') {
        secondValue = input.value
        if (operation === '÷') {
            result = input.value = Number(firstValue) / Number(secondValue)
        } else if (operation === 'x') {
            result = input.value = Number(firstValue) * Number(secondValue)
        } else if (operation === '-') {
            result = input.value = Number(firstValue) - Number(secondValue)
        } else {
            result = input.value = Number(firstValue) + Number(secondValue)
        }
    }

})



})




