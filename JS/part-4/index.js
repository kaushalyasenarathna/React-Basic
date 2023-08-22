



const singleObject={
    name:'kaushalya',
    age:25,
    address:'kirindiwela'
}

// normal structure
console.log("name :",singleObject.name ,"age :",singleObject.age  , "address : " ,singleObject.address); // output name : kaushalya age : 25 address :  kirindiwela

// Destructure
const {name,age,address}=singleObject;
console.log(name,age,address); // output:kaushalya 25 kirindiwela



const arrayOfObjects = [
    { name: 'Kaushalya', age: 25 },
    { name: 'Tamara', age: 28 },
    { name: 'Dilani', age: 30 }
  ];
  const [firstPerson, secondPerson, thirdPerson] = arrayOfObjects;

  console.log(firstPerson);   // { name: 'kaushalya',  age:  25 }
  console.log(secondPerson);  // { name:'Tamara', age:  28 }
  console.log(thirdPerson);   // { name: 'Dilani', age: 30 }

  const [{ name: firstName1, age: age1 }, { name: firstName2, age: age2 }, { name: firstName3, age: age3 }] = arrayOfObjects;

  console.log(firstName1, age1);  // kaushalya 25
  console.log(firstName2, age2);  // Tamara 28
  console.log(firstName3, age3);  // Dilani 30
  