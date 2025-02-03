let menu =document.getElementById('menu');
let actions =document.getElementById('actions');
menu.addEventListener("click",()=>{
    handelMenu()
})

function handelMenu(){
    
    menu.classList.toggle("is-active");

    actions.classList.toggle("is-active")
}