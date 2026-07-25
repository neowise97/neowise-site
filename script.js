// ===== Анімація появи =====

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll(".card,.hero").forEach(el=>{

observer.observe(el);

});


// ===== Світіння карток =====

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background = 
radial-gradient(circle at ${x}px ${y}px,
rgba(0,217,255,.18),
rgba(255,255,255,.05))
;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.06)";

});

});


// ===== Паралакс фону =====

document.addEventListener("mousemove",(e)=>{

const bg=document.querySelector(".background");

const x=(e.clientX/window.innerWidth-.5)*20;

const y=(e.clientY/window.innerHeight-.5)*20;

bg.style.transform = translate(${x}px, ${y}px) scale(1.05);

});


// ===== Плавне збільшення логотипа =====

const logo=document.querySelector(".logo");

let grow=true;

let scale=1;

setInterval(()=>{

if(grow){

scale+=0.0015;

}else{

scale-=0.0015;

}

if(scale>=1.05)grow=false;

if(scale<=1)grow=true;

logo.style.transform = scale(${scale});

},20);
const menu = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");
});
