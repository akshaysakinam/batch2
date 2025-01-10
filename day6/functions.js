// console.log("hello");

//Higher Order Functions: Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

//callback function: A function that is passed to another function as a parameter and is executed inside that function.

// function hof(callbackfn) {
//     return callbackfn(10)
// }
// let x = function (value) {
//     return value
// }

// console.log(hof(x))



// function hof2(a) {
//     return a()
// }

// console.log(hof2(function () {
//     return 15
// }))

// let users = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"]
// let res = ""
// console.log(users);
// // users.map((user) => console.log(user))
// //or
// users.map((user) => res += user + " ")
// console.log(res.trim());



//closure:
// it is  a memory created when functions are bundled together/ nested each other by giving accesisibility to the innermost function to the variable of outermost function.
