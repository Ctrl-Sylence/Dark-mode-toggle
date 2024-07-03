const inputEL = document.querySelector(".input");
const bodyEL = document.querySelector("body");

inputEL.checked = true;

updatebody()

function updatebody(){
    if(inputEL.checked){
        bodyEL.style.background = "black";
    }
    else{
        bodyEL.style.background = "white";
    }
}
inputEL.addEventListener("input", ()=>{
    updatebody()
})