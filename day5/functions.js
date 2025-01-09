//without parameters]

// function demo() {
//     console.log("hello");
// }
// demo();



//function with parameters and arguments
// let a ;
// let b ;
// function sum(a, b) {
//     console.log(a + b);
// }
// sum(8,5);

//types of functions in javascript
//1. named function: having name and invoke with same name

function test() {
    console.log("Named function");
}
test();

//2. anonymous function: have no name executed with function expression or IIFE it cannot be executed by itself.

// function(){
//     console.log("Anonymous function");
// }


//3. function expression: it is stored in a variable and can be invoked using that variable name.
let x = function () {
    console.log("anonymous is invoked using function expression");
}
// console.log(x); //prints function definition

x();

//4. IIFE: Immediately Invoked Function Expression: it is a function that runs as soon as it is defined.It can be executed only once.
(function () {
    console.log("IIFE is invoked");
})();

//5. Arrow function: it is a shorter syntax for writing function expressions. it does not have its own this, arguments, super, or new.target. These functions are best suited for non-method functions, and they cannot be used as constructors.
let y = _ => { // _ is a parameter name which is used when we don't have any parameters.
    console.log("Arrow function is invoked");
}
y();

// let z = a => console.log(a)
// z("Arrow function with one parameter");




// implicit return and explicit return
//explicit return used in normal and arrow function


//normal function with explicit return
// function add(x, y) {
//     return x + y; //explicit return- manually return the value using return keyword
// }
// console.log(add(5, 6));


//arrow function with explicit return
// let z = (x, y) => {
//     return x + y;
// }
// console.log(z(10, 20))



//implicit return used in arrow function
let z = (x, y) => x + y;
console.log(z(10, 20));




