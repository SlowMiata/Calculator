const display = document.querySelector(".display")
const currentDisplay = document.querySelector('.currentDisplay')
const pastDisplay = document.querySelector('.pastDisplay')
const equal = document.querySelector(".equal")
const clear = document.querySelector('.clear')



const add = function(a,b) {

    return a + b
};

const subtract = function(a,b) {
    return a - b
    
};

const multiply = function(a,b) {
    return a*b

};
const divide = function(a,b) {
    return a/b

};

//not used right now, maybe later on
const power = function(a,b) {

    return Math.pow(a,b)

    
};

const factorial = function(a) {
    let total = 1
    for(let i = 1; i <= a; i++){
        total *= i
    }

    return total
}

let currOperator = ''
let firstNum = ''
let secondNum = ''
let hasCurrOperator = false
let hasFirstNum = false
let HasSecondNum = false


const operate = function(first,operator,second){

    let ans = 0

    first = Number(first)
    second = Number(second)

    if(operator === "+"){
        //call add
        return add(first,second)

    }else if (operator === "-"){
        //call sub
        return subtract(first,second)

    }else if (operator === "x"){
        //call multi
        return multiply(first,second)

    }else if (operator === "/"){
        //call divide
        if(second == 0){
            return 'error'
        }
        return divide(first,second)

    }

    return ans
}



//to clear the display and reset all saved values
clear.addEventListener('click', ()=>{
    currentDisplay.textContent = ""
    pastDisplay.textContent = ""
    currOperator = ''
    firstNum = ''
    secondNum = ''
    hasCurrOperator = false
    hasFirstNum = false
    HasSecondNum = false


})

//stores the last input button
let buttonValue


const btnContainer = document.querySelector('.btnContainer');
btnContainer.addEventListener('click', function(event) {
    const clickedButton = event.target;


// Check if a num or op button is clicked
if (clickedButton.classList.contains('num') || clickedButton.classList.contains('op')) {
    buttonValue = clickedButton.textContent;
    
    //check if it the first number has been inputted if not append the value the first number
    if(hasFirstNum === false && clickedButton.classList.contains('num')){
        firstNum += buttonValue
        currentDisplay.textContent = firstNum
    }
    //the user has enter the operator
    if(hasCurrOperator === false && clickedButton.classList.contains('op')){
        currOperator = buttonValue
        //declares that the first number has been inputted and the operator has been entered
        hasCurrOperator = true
        hasFirstNum = true
    }
    //changes the operator
    if(hasCurrOperator === true && clickedButton.classList.contains('op') && hasFirstNum === true & HasSecondNum === false){
        currOperator = buttonValue
    }
    //adds in the second number
    if(hasCurrOperator === true && clickedButton.classList.contains('num') && hasFirstNum === true){

        secondNum += buttonValue
        currentDisplay.textContent = ''
        currentDisplay.textContent = secondNum
        HasSecondNum = true
        
    }

    if(hasCurrOperator === true && clickedButton.classList.contains('op') && hasFirstNum === true & HasSecondNum === true){
        //save the answer as the first op
        //currOperator = buttonValue
        currentDisplay.textContent = operate(firstNum,currOperator,secondNum)
        firstNum = currentDisplay.textContent
        currOperator = buttonValue
        secondNum = ''
        HasSecondNum = false
    }
    
}
});


equal.addEventListener('click',()=>{
    //make pasDisplay = answer
    pastDisplay.textContent = ''
    if(HasSecondNum === false){
        currentDisplay.textContent = firstNum
    }
    else{
        currentDisplay.textContent = operate(firstNum,currOperator,secondNum)
        firstNum = currentDisplay.textContent
        hasCurrOperator = false
        currOperator = ''
        HasSecondNum = false
        secondNum = ''

    }

})



