document.addEventListener("DOMContentLoaded", function() {
    const flipButton = document.getElementById("flip-button");
    const result = document.getElementById("result");
    const headsCountElement = document.getElementById("headsCount");
    const tailsCountElement = document.getElementById("tailsCount");

    let headsCount = 0;
    let tailsCount = 0;

    flipButton.addEventListener("click", function() {
        const outcome = Math.random() < 0.5 ? "Heads" : "Tails";
        result.textContent = outcome;

        if (outcome === "Heads") {
            headsCount++;
            headsCountElement.textContent = headsCount;
        } else {
            tailsCount++;
            tailsCountElement.textContent = tailsCount;
        }
    });

    document.getElementById("flip-button").addEventListener("keydown", function(event){
        if (event.key === "enter") {
            flipButton
        }
    })
    
});

