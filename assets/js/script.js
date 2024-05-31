document.addEventListener("DOMContentLoaded", function() {
    const flipButton = document.getElementById("flip-button");
    const result = document.getElementById("result");

    flipButton.addEventListener("click", function() {
        const outcome = Math.random() < 0.5 ? "Heads" : "Tails";
        result.textContent = outcome;
    });

});

