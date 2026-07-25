// ===============================
// BURGER MENU
// ===============================

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

if (menu && nav) {
    menu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// Закривати меню після натискання

document.querySelectorAll("nav ul a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

// ===============================
// TYPEWRITER
// ===============================

const text = "Приєднуйся до моєї спільноти";

const typing = document.getElementById("typing-text");

typing.innerHTML = "";

let i = 0;

function typeWriter(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,70);

    }

}

window.addEventListener("load",()=>{

    setTimeout(typeWriter,700);

});

// ===============================
// HERO ANIMATION
// ===============================

const hero = document.querySelector(".hero-content");

hero.style.opacity = "0";
hero.style.transform = "translateY(40px)";

window.addEventListener("load",()=>{

    setTimeout(()=>{

        hero.style.transition = "1s";

        hero.style.opacity = "1";

        hero.style.transform = "translateY(0)";

    },300);

});

// ===============================
// CARD ANIMATION
// ===============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".7s";

observer.observe(card);

});
