let bars = document.querySelector(".fa-bars");
bars.addEventListener("click",myfunction);
function myfunction(){
    bars.classList.toggle("fa-times");
    document.querySelector(".nav-list").classList.toggle("toggle");
}
let nav= document.querySelector("nav");
function scroll(){
    if(window.scrollY>20){
        nav.classList.add("scroll-nav");
        console.log("true")
    
    } else {
        nav.classList.remove('scroll-nav');
    }
    }
scroll();