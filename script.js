console.log("Portfolio Loaded");
const toggleBtn = document.getElementById("dark-mode-toggle");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});
console.log("Portfolio Loaded");

/* DARK MODE */

const toggleBtn = document.getElementById("dark-mode-toggle");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});


/* SCROLL ANIMATION */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach((section) => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            section.classList.add("show");

        }

    });

});
/* TYPING EFFECT */

const typingText = document.querySelector(".typing-text");

const words = [

    "Frontend Developer",
    "MERN Stack Enthusiast",
    "React Developer"

];

let wordIndex = 0;
let letterIndex = 0;

function typeEffect(){

    if(letterIndex < words[wordIndex].length){

        typingText.textContent += words[wordIndex].charAt(letterIndex);

        letterIndex++;

        setTimeout(typeEffect, 100);

    }

    else{

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect(){

    if(letterIndex > 0){

        typingText.textContent = words[wordIndex].substring(0, letterIndex - 1);

        letterIndex--;

        setTimeout(eraseEffect, 50);

    }

    else{

        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex = 0;

        }

        setTimeout(typeEffect, 300);

    }

}

window.onload = typeEffect;