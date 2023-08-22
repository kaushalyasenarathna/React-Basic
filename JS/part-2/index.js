
// Regular function  concatenation 
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
  }
  
  const fullName = getFullName('Kaushalya', 'Senarathna');
  console.log("Full Name (Normal Concatenation):", fullName);  // Output: "Full Name (Normal Concatenation): Kaushalya Senarathna"


  //arrow function   concatenation
const getFullNameArrow = (firstName,lastName) => `${firstName} ${lastName}`;

const fullNameArrow = getFullNameArrow('Tamara','Senarathna');
console.log("Full Name (Arrow Function):", fullNameArrow);  // Output: "Full Name (Arrow Function): Tamara Senarathna"


//  regular function   concatenating  
function createMessage(name, role) {
    return "Hello, my name is " + name + " and I work as a " + role + ".";
}

const message = createMessage('Kaushalya Senarathna', 'Laravel  Developer');
console.log("Message (Regular Function):", message);  // Output: "Message (Regular Function): Hello, my name is Kaushalya and I work as a Laravel Developer."


// arrow function   concatenating  
const createMessageArrow = (name, role) => `Hello, my name is ${name} and I work as a ${role}.`;

const messageArrow = createMessageArrow('Tamara', 'Dental therapist');
console.log("Message (Arrow Function):", messageArrow);  // Output: "Message (Arrow Function): Hello, my name is Tamara and I work as a Dental therapist."
