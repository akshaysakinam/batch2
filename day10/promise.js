let p1=new Promise(()=>{})
// console.log(p1) // Promise { <pending> }  ;

let p2=new Promise((resolve,reject)=>{
    resolve('success');
    
})
// console.log(p2) // Promise { 'success' }  ;


// let p3=new Promise((resolve,reject)=>{
//     reject('error');
// })
// console.log(p3) // Promise { <rejected> 'error' }  ;

p2.then((data)=>{
    console.log(data)
}
).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log('finally')
})

