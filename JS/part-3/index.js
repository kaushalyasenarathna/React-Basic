// LET VAR CONST

var x=5;
var y=20;
let z=60;
const name="kaushalya";
const student={};
student.name="senarathna";

console.log(name);
console.log(student.name);



function varVarable(){
    var x=10000000000000;
     console.log("X in varvarible function :",x);//output :10000000000000
    
}

if (true){

    var y=8000;
     let z=1000;        //working only blockscope

  console.log("value of z :",z);//output 1000:



}




const c=50;  

function typeOfvariable() {
    var a = 1;   
    let b = 2;   
    const c = 3;  
  
    if (true) {
      var a = 10;  
      let b = 20;  
      const c = 30;   
      console.log(a);    //output :10
      console.log(b);    //output :20
      console.log(c);   //output :30
    }
  
    console.log(a);    //output :10
    console.log(b);    //output :2
    console.log(c);   //output :3
  }


  console.log(c);//output :50
  console.log(x);//output :5
  console.log("Value of Z:", z);//output :60

  console.log("Value of Y",y);//output :8000


  varVarable();
  typeOfvariable();

  