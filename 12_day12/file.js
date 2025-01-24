// let element=document.getElementById("demo")
// element.innerHTML="DOM"
// element.innerText="DOM"
// console.log(element)/

// let test=document.getElementById("test")
// test.innerHTML="<h1>Header</h1>"
// console.log(test)

// let ele=document.getElementsByClassName("test")
// console.log(ele);
// console.log(Array.isArray(ele)); //this method is used to check 
//whether given array is pure array or not
//spread operator is used to convert impure array to pure array

// let x=[...ele]
// console.log(x);
// x.map((element)=>{
//     console.log(element);
//     element.style.backgroundColor="black"
//     element.style.color="white"
//     element.style.fontSize="20px"
//     element.style.margin="10px"
//     element.style.padding="10px"
//     element.style.borderRadius="10px"
//     element.style.border="2px solid black"
//     element.style.textAlign="center"
//     element.style.boxShadow="5px 5px 5px black"
//     element.style.textTransform="uppercase"
// })


//Tag 
// let ele=document.getElementsByTagName("div")
// console.log(ele); //HTML collection
// let x=[...ele]
// console.log(x);

// [...ele].map((element)=>{
//     console.log(element);
//     element.style.backgroundColor="black"
//     element.style.color="white"
//     element.style.fontSize="20px"
//     element.style.margin="10px"
//     element.style.padding="10px"
//     element.style.borderRadius="10px"
//     element.style.border="2px solid black"
//     element.style.textAlign="center"
//     element.style.boxShadow="5px 5px 5px black"
//     element.style.textTransform="uppercase"
// })

//Name

// let ele=document.getElementsByName("username");
// console.log(ele); //HTML collection
// [...ele].map((element)=>{
//     console.log(element);
//     element.style.backgroundColor="black"
//     element.style.color="white"
//     element.style.fontSize="20px"
//     element.style.margin="10px"
//     element.style.padding="10px"
//     element.style.borderRadius="10px"
//     element.style.border="2px solid black"
//     element.style.textAlign="center"
//     element.style.boxShadow="5px 5px 5px black"
//     element.style.textTransform="uppercase"
// })

//Query Selector
// let ele=document.querySelector("#demo")
// console.log(ele);
// ele.style.backgroundColor="black"
// ele.style.color="white"

//querySelector is used to select only first element
//to select all elements we use querySelectorAll

let ele=document.querySelectorAll(".test")
console.log(ele); //Node list

