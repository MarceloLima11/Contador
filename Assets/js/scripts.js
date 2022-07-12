var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.addEventListener(currentNumber, currentNumberWrapper.innerHTML = currentNumber);
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.addEventListener(currentNumber, currentNumberWrapper.innerHTML = currentNumber);
}