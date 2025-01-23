// let p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("success")
//     },4000)
// })

// async function demo() {
//     console.log("start");
//     let x= await p;
//     console.log(x)
//     console.log("end");
    
    
// }
// demo()

async function fetchUser() {
    let res=await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data=await res.json();
    console.log(data);
    
}
fetchUser()