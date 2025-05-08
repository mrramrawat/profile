const titles = [
	"Computer Engineer",
    "MERN Stack Developer",
    "UI/UX Designer",
    "ML (Machine Learning)",
    "AI Enthusiast",
    "Python Programmer"
];

let currentTitle = 0;
let currentChar = 0;
let typewriterElement = document.getElementById('typewriter');

function typeEffect() {
    if (currentChar < titles[currentTitle].length) {
        typewriterElement.textContent += titles[currentTitle].charAt(currentChar);
        currentChar++;
        setTimeout(typeEffect, 100); // typing speed (100ms per letter)
    } else {
        setTimeout(eraseEffect, 1500); // wait before erasing
    }
}

function eraseEffect() {
    if (currentChar > 0) {
        typewriterElement.textContent = titles[currentTitle].substring(0, currentChar - 1);
        currentChar--;
        setTimeout(eraseEffect, 50); // erasing speed (faster)
    } else {
        currentTitle = (currentTitle + 1) % titles.length; // move to next title
        setTimeout(typeEffect, 500); // small pause before typing next title
    }
}

// Start the typing effect
typeEffect();
