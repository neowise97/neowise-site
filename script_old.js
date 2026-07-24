// Анімація логотипа
const title = document.querySelector("header h1");

let scale = 1;
let direction = 1;

setInterval(() => {
    scale += direction * 0.002;

    if (scale >= 1.03) direction = -1;
    if (scale <= 1.00) direction = 1;

    title.style.transform = scale(${scale});
}, 30);

// Плавна поява секцій
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll("section").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);
});

// Ефект нахилу карток
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = ((y / rect.height) - 0.5) * -12;

        card.style.transform =
            perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03);
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    });

});
