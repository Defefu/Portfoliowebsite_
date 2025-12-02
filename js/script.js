/* ===================== typing animation ====================*/
document.addEventListener("DOMContentLoaded", () => {
    var typed = new Typed(".typing", {
        strings: ["", "Protector", "Guide", "Strength", "Mentor", "Love"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typedMother = new Typed(".typing-mother", {
        strings: ["", "the soul of our home", "our guiding light", "a loving heart", "our greatest blessing"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typedMy = new Typed(".typing-my", {
        strings: ["", "Graphics Designer", "Website Developer", "Youtubers", "Web Programers"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typedBrother = new Typed(".typing-brother", {
        strings: ["", " Always full of life and curiosity", "Soul Sibling", "Lifelong ally", "Kindred sprit"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typedSister = new Typed(".typing-sister", {
        strings: ["", "joyful", "endlessly imaginative", "Heart's echo", "Kindred soul"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});