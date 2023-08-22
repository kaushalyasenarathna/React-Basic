const numbers = [1, 2, 3, 4, 5];

const resultForMultipication = numbers.map((number) => number * 2);

console.log(resultForMultipication); // Output: [2, 4, 6, 8, 10]


const user = { name: 'kaushalya', age: 25, address: 'kirindiwela' };

const outputBySingleUser = Object.keys(user).map(key => user[key]); //[ 'kaushalya', 25, 'kirindiwela' ]

console.log(outputBySingleUser);

const userList=[{name:'kaushalya' ,age:25},{name:'Tamara',age:28},{name:'chathuni',age:15},{name:'maneesha',age:28},{name:'janudhi',age:15}];

const outputByUserListOne=userList.map((uList)=>uList);
const outputByUserListTwo = userList.map((uList) => (
    uList.age
  ));
  


console.log(outputByUserListOne); 
// output [
//     { name: 'kaushalya', age: 25 },
//     { name: 'Tamara', age: 28 },
//     { name: 'chathuni', age: 15 },
//     { name: 'maneesha', age: 28 },
//     { name: 'janudhi', age: 15 }
//   ]

console.log(outputByUserListTwo); // [ 25, 28, 15, 28, 15 ]


