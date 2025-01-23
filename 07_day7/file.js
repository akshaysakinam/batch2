//closue is memory created when functions bundled together/functions nested each other
//it allows to access outer function scope from inner function scope
function x() {
    let a = 10
    let b = 20
    console.log(a, b);
    function y() {
        let p = "js"
        var q = "reactjs"
        console.log(p, q);
        function z() {
            const username = "sachin"
            console.log(username);
            console.log(a);
            console.log(q);
        }
        z()
    }
    y()
}
// x()

//Arrays
//Array is collection of elements
//Array is object in javascript

// //map and forEach
// let userrs = ["sachin", "rajat", "mohit", "arjun"]
// // console.log(userrs);
// let u = userrs.map(item => (item))
// console.log(u); // ["sachin", "rajat", "mohit", "arjun"] because map returns new array

// let y = userrs.forEach((item) => {
//     return item
// })
// console.log(y); //undefined because forEach does not return anything




//push,pop,shift,unshift,reverse,sort,splice,slice,join,filter

// let users = ["sachin", "rajat", "mohit", "arjun"]
// console.log(users);
// users.push("rohit") //add element at last    
// console.log(users);
// users.pop() //remove element from last
// console.log(users);
// users.shift() //remove element from first
// console.log(users);
// users.unshift("rohit") //add element at first
// console.log(users);
// users.reverse() //reverse the array
// console.log(users);
// console.log("-----");

// users.splice(1, 0, "rohit") //add element at specific index
// console.log(users);
// users.splice(1, 1) //remove element at specific index
// console.log(users);
// console.log("Slicing");

// let u = users.slice(1, 3) //slice the array
// console.log(u);
// console.log("join") //join is used for converting array to string 
// let v = users.join(" ") //join the array
// console.log(v); //arjun mohith rajat rohit  because join returns string


// let w = users.filter(item => item === "mohit") //filter the array
// console.log(w);//["mohit"] because filter returns new array


//concat
let frontend = ["HTML", "CSS", "JS", "REACTJS", "ANGULAR", "VUE"];
let backend = ["NodeJs", "Expressjs", "Java", "PHP ", "Golang"];
let db = ["MongoDB", "MySQL", "Oracle", "MariaDB", "CouchDB"];
//.console.log(frontend);
//.console.log(backend);
let fullstack = frontend.concat(backend, db);
console.log(fullstack);


// Objects
//Object is collection of key value pair

let user = {
    username: "sachin",
    email: "123@gmail.com",
    password: "123456",
    age: 21,
    address: {
        city: "jaipur",
        state: "rajasthan",
        country: "india"
    }
}
// console.log(user);
// console.log(user.username);
// console.log(user.email);
//
// console.log(user.address.city);
// console.log(user.address.state);
// console.log(user.address.country);


//array of objects

let users = [
    {
        username: "sachin",
        email: "123@gmail.com"
    },
    {
        username: "akshay",
        email: "123@gmail.com"
    },
    {
        username: "harish",
        email: "123@gmail.com"
    },
    {
        username: "adarsh",
        email: "123@gmail.com"
    },
]
users.map(item => console.log(item.username)) //sachin akshay harish adarsh
