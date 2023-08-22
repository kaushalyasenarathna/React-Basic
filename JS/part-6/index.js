const numbers = [1, 2, 3, 4, 5];
const newValue = 6;

const newArray = numbers.concat(newValue);

console.log(newArray); // [1, 2, 3, 4, 5, 6]


const numbersTwo = [1, 2, 3, 4, 5];
const newValues = [6, 7, 8];

const newArrayTwo = numbers.concat(newValues);

console.log(newArrayTwo); // [1, 2, 3, 4, 5, 6, 7, 8]


// destucture
const numbersdestucture = [1, 2, 3, 4, 5];
const newValuedestucture = 6;

const newArraydestucture = [...numbers, newValue];

console.log(newArraydestucture); // [1, 2, 3, 4, 5, 6]


const numbersTwodestucture = [1, 2, 3, 4, 5];
const newValuesdestucture = [6, 7, 8];

const newArrayTwodestucture = [...numbersTwo, ...newValues];

console.log(newArrayTwodestucture); // [1, 2, 3, 4, 5, 6, 7, 8]
