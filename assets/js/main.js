let menuIcon=document.querySelector(".fa-bars")
let header=document.querySelector("header")


menuIcon.addEventListener("click",function(){
    menuIcon.classList.toggle("fa-xmark")
    header.classList.toggle("responsiveNav")
})