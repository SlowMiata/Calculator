const add = function(...nums) {
    if(nums.length === 0){
    return 0
    }

    let result = nums.reduce((sum, current) => sum + current, 0);

    return result
    //return a + b


};

const subtract = function(...nums) {
    if (nums.length === 0){
        return 0
    }
    let result = nums.reduce((diff, current) => diff - current);

    return result

    //return a - b
    
};

const sum = function(nums) {


    let result = nums.reduce((sum, current) => sum + current, 0);

    return Number(result)
    
};

const multiply = function(nums) {

    return nums.reduce((total, current) => total * current, 1);

};

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

let equation


const display = document.querySelector(".display")
const currentDisplay = document.querySelector('.currentDisplay')
const pastDisplay = document.querySelector('.pastDisplay')
const equal = document.querySelector(".equal")

const clear = document.querySelector('.clear')


clear.addEventListener('click', ()=>{
    currentDisplay.textContent = ""
    pastDisplay.textContent = ""
})

let buttonValue

const btnContainer = document.querySelector('.btnContainer');
btnContainer.addEventListener('click', function(event) {
    const clickedButton = event.target;

// Check if the clicked element is a button
if (clickedButton.classList.contains('num') || clickedButton.classList.contains('op')) {
    buttonValue = clickedButton.textContent;

    // Do something based on the button value or class
    currentDisplay.textContent += buttonValue
    equation = currentDisplay.textContent

    
}
});


equal.addEventListener('click',()=>{
    
    pastDisplay.textContent = currentDisplay.textContent
    currentDisplay.textContent = ''
})

