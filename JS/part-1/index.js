// Regular function declaration
function regularFunction(a, b) {
    return a + b;   
}

// Calling the regular function
const resultRegular = regularFunction(32, 11);   

console.log("Regular Function:", resultRegular);  // Output: "Regular Function: 43"
 

// *********************************************

// Arrow function expression

 
const arrowFunctionOne = (a, b) => a + b;  

 
const arrowFunctionTwo = (a, b) => {

    return a + b;   
}


// Calling the arrow functions
const resultArrowOne = arrowFunctionOne(2, 3);  
const resultArrowTwo = arrowFunctionTwo(2, 3);   


console.log("Arrow Function One:", resultArrowOne);  // Output: "Arrow Function One: 5"
console.log("Arrow Function Two:", resultArrowTwo);  // Output: "Arrow Function Two: 5"
 
