// Primitive Data Type
    // 7 type  => call by value not givin reference in memory ,given the copy of refrence
    
    //  1 String
    //  2 Number;
    // 3 boolean
    // 4 null
    // 5 undefined
    // 6 symbol
    // 7 BigInt
// Reference Type ( Non-Primitive) Data type
//   they are direct given the reference of memory 
    // Array
    // Object, Function
// java Script is the Dynamically scripting language

// const id=Symbol("1234");
// const anotherId=Symbol("1234");
// console.log(id===anotherId);
// console.log(id);
// console.log(anotherId);


// Arrays=>
const names=["keshav","Rahul","madhu"];
  
// Object=>
let person={
    name:"Keshav",
    age:24
}

// Function=>
 const myFunction=function(){
    console.log("Hello World!");
 }

console.log(person.name);
console.log(names);
console.log(  myFunction);
