
const randomNumber = Math.floor(Math.random() * 101);

let attempts = 0;

function checkGuess() {

    let guess = parseInt(document.getElementById("guessInput").value);


    if (isNaN(guess)) {
        document.getElementById("message").textContent = "To nie jest liczba!";
        return;
    }


    attempts++;


    if (guess === randomNumber) {
        document.getElementById("message").textContent = `Gratulacje! Zgadłeś liczbę ${randomNumber} w ${attempts} próbach.`;
        setTimeout(function() {
            location.reload(); 
        }, 3000); 
    } else if (guess < randomNumber) {
        document.getElementById("message").textContent = "Podana liczba jest za mała!";
    } else {
        document.getElementById("message").textContent = "Podana liczba jest za duża!";
    }
}

document.getElementById("checkButton").addEventListener("click", checkGuess);