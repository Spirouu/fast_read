const textInput = document.getElementById("text-input");
const displayArea = document.getElementById("display-area");
const startButton = document.getElementById("start-button");
const speedRange = document.getElementById("speed-range");
const speedValue = document.getElementById("speed-value");

let words = [];
let currentWordIndex = 0;
let interval;
let currentSpeed = parseInt(speedRange.value, 10);

speedValue.textContent = currentSpeed; // Afficher la valeur initiale

speedRange.addEventListener("input", () => {
    currentSpeed = parseInt(speedRange.value, 10);
    speedValue.textContent = currentSpeed;
});

startButton.addEventListener("click", () => {
    words = textInput.value.split(" ");
    currentWordIndex = 0;

    interval = setInterval(() => {
        if (currentWordIndex < words.length) {
            displayArea.textContent = words[currentWordIndex];
            currentWordIndex++;
        } else {
            clearInterval(interval);
        }
    }, 1000 / currentSpeed); // Utiliser la vitesse actuelle pour l'intervalle
});
