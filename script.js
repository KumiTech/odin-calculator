// functions

function add(a,b) {
    return a + b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    if( b === "0"){
     updateDisplay("Cannot divide a number by zero ")
     clearDisplay()
     return 0
    }
    {
     return a/b
    }
}


//Operate Function 
function operate(firstNum,secondNum,operator){
    switch (operator) {
        case '+':
            return add(firstNum,secondNum)
        case '-':
           return subtract(firstNum,secondNum)
        case '×':
           return multiply(firstNum,secondNum)
        case '÷':
        return divide(firstNum,secondNum)
    }
}

const display = document.querySelector('#display')
const numBtns = document.querySelectorAll(".number")
const operatorBtns = document.querySelectorAll(".operator")
const equalBtn = document.querySelector(".equals")
const clearBtn = document.querySelector(".clear")
const deleteBtn = document.querySelector(".delete")



// Variables for operations
let firstNum = ""
let secondNum = ""
let currentOperator = null
let shouldResetDisplay = false


// Function to update display
function updateDisplay(value) {
    display.value = value || '0'
}

//function to reset display 
function resetDisplay(){
    display.value = ""
    shouldResetDisplay = false
}

// function to clear display
function clearDisplay(){
firstNum = ""
secondNum = ""
currentOperator = null
shouldResetDisplay = false
updateDisplay("0")

}
function deleteNum(){
    if(display.value.length > 1){
        const result =  display.value.slice(0,-1)
       return  updateDisplay(result)
    }
    else return
} 

deleteBtn.addEventListener("click", deleteNum)

clearBtn.addEventListener('click', clearDisplay)


  numBtns.forEach( btn => {
        btn.addEventListener('click', () => {
            if(shouldResetDisplay){
                resetDisplay()
            }
            display.value += btn.textContent 
        })
    })

// operator button
operatorBtns.forEach( btn => {
    btn.addEventListener('click',() => {
        const clickedOperator = btn.textContent

        // Logic for when there is already a number
        if(firstNum && !shouldResetDisplay){
            secondNum = parseFloat(display.vlaue)
            const result = operate(parseFloat(firstNum),secondNum,currentOperator)
            updateDisplay(result)
            firstNum = result
        }
        else{
            firstNum = parseFloat(display.value)
        }
        currentOperator = clickedOperator
        shouldResetDisplay = true
    })
})

// equals
equalBtn.addEventListener('click', () => {
    if(!firstNum || !currentOperator) 
        {return;}
    secondNum = parseFloat(display.value)
    const result = operate(parseFloat(firstNum),secondNum,currentOperator)
    updateDisplay(result)

    firstNum = result
    currentOperator = null 
    shouldResetDisplay = true
})

updateDisplay("0")
