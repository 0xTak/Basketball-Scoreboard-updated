let startingNumber = 0
let leftSumEl = document.getElementById("left-sum-el")
let rightSumEl = document.getElementById("right-sum-el")



function leftOne() {
     startingNumber += 1 
     leftSumEl.textContent = startingNumber
}

function leftTwo() {
     startingNumber += 2
     leftSumEl.textContent = startingNumber 
}

function leftThree() {
     startingNumber += 3
     leftSumEl.textContent = startingNumber
}

function rightOne() {
     startingNumber += 1 
     rightSumEl.textContent = startingNumber
}

function rightTwo() {
     startingNumber += 2
     rightSumEl.textContent = startingNumber 
}

function rightThree() {
     startingNumber += 3
     rightSumEl.textContent = startingNumber
}

let resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", function() {
    startingNumber = 0;
    leftSumEl.textContent = startingNumber;
    rightSumEl.textContent = startingNumber;
});
