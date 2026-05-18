/* =========================
   TYPING EFFECT
========================= */

const typingText = document.querySelector(".typing-text");

const words = [

    "Frontend Developer",
    "MERN Stack Enthusiast",
    "UI Designer",
    "React Developer"

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(isDeleting){

        typingText.textContent =
        currentWord.substring(0, charIndex--);

    }

    else{

        typingText.textContent =
        currentWord.substring(0, charIndex++);

    }

    let speed = isDeleting ? 60 : 120;

    if(!isDeleting && charIndex === currentWord.length){

        speed = 1500;

        isDeleting = true;
    }

    else if(isDeleting && charIndex === 0){

        isDeleting = false;

        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


/* =========================
   ACTIVE SIDEBAR
========================= */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".sidebar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if(scrollY >= sectionTop - 200){

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.style.background = "transparent";

        link.style.boxShadow = "none";

        if(link.getAttribute("href").includes(current)){

            link.style.background =
            "linear-gradient(135deg,#00c3ff,#7c3aed)";

            link.style.boxShadow =
            "0 0 20px rgba(0,195,255,0.45)";
        }

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const cards =
document.querySelectorAll(".card");

const revealCards = () => {

    cards.forEach((card) => {

        const windowHeight =
        window.innerHeight;

        const cardTop =
        card.getBoundingClientRect().top;

        if(cardTop < windowHeight - 80){

            card.style.opacity = "1";

            card.style.transform =
            "translateY(0)";
        }

    });

};

cards.forEach((card) => {

    card.style.opacity = "0";

    card.style.transform =
    "translateY(40px)";

    card.style.transition =
    "all 0.8s ease";

});

window.addEventListener("scroll", revealCards);

revealCards();


/* =========================
   CARD HOVER GLOW
========================= */

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect =
        card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =
        `
        radial-gradient(
        circle at ${x}px ${y}px,
        rgba(0,195,255,0.12),
        rgba(255,255,255,0.04)
        )
        `;
    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
        "rgba(255,255,255,0.04)";
    });

});


/* =========================
   SMOOTH PAGE LOAD
========================= */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";
});

document.body.style.opacity = "0";

document.body.style.transition =
"opacity 1s ease";