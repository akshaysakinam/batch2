let bgcolorelements=document.querySelectorAll('.bgcolor');

[...bgcolorelements].map(element=>{
    element.addEventListener("mouseover",()=>{
        // console.log(element);
        element.style.backgroundColor=element.innerText;
    })
    element.addEventListener("mouseout",()=>{
        element.style.backgroundColor="white";
    })
})