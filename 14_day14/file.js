let mainEle=document.createElement("div");

mainEle.setAttribute("id","mainBlock");
// console.log(mainEle);

let topEle=document.createElement("div");
topEle.setAttribute("id","topBlock");
// console.log(topEle);

let image=document.createElement("img");
image.src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

topEle.appendChild(image);


let bottomEle=document.createElement("div");

bottomEle.setAttribute("class","bottomBlock");
// console.log(bottomEle);

let h1=document.createElement("h1");
h1.innerText="Google";

let button=document.createElement("button");
button.innerText="view more";

bottomEle.appendChild(h1);
bottomEle.appendChild(button);

mainEle.appendChild(topEle)
mainEle.appendChild(bottomEle)
document.body.appendChild(mainEle);
