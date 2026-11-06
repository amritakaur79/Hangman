let POSSIBLE_WORDS = ["obdurate", "aberration", "abnegation", "abrogate", "abscond",
    "abstruse", "accolade", "acumen", "adulation", "aegis",
    "affable", "alacrity", "altruistic", "ambivalent", "ameliorate",
    "anachronistic", "anathema", "antithesis", "apocryphal", "approbation"];
let guesses = "";
let word = "";
let MAX_GUESSES = 6;
let guessCount = MAX_GUESSES;
function newGame() {
    guesses = "";
    let randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    updateScreen();
}

function guess() {
    let input = document.getElementById("guess");
    let letter = input.value;
    if (word.indexOf(letter) < 0) {
        guessCount--;
    }
    guesses += letter;
    updateScreen();
}
function updateScreen() {
    let clueString = "";
    for (let i = 0; i < word.length; i++) {
        let letter = word.charAt(i);
        if (guesses.indexOf(letter) >= 0) {
            clueString += letter + " ";

        } else { clueString += "_ "; }
    }
    let clue = document.getElementById("clue");


    clue.textContent = clueString;
    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guessed Letters: " + guesses;

    let image = document.getElementById("hangmanpic");
    image.src = `images/hangman${guessCount}.gif`;

}