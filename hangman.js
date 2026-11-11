let POSSIBLE_WORDS = ["obdurate", "aberration", "abnegation", "abrogate", "abscond",
    "abstruse", "accolade", "acumen", "adulation", "aegis",
    "affable", "alacrity", "altruistic", "ambivalent", "ameliorate",
    "anachronistic", "anathema", "antithesis", "apocryphal", "approbation",
    "benevolent", "blandishment", "bombastic", "boorish", "brusque",
    "cajole", "callous", "capitulate", "capricious", "castigate",
    "cathartic", "caustic", "censure", "chicanery", "circumspect",
    "coerce", "cogent", "coherent", "complacent", "conciliatory",
    "daunt", "dearth", "debacle", "decorum", "deference",
    "egregious", "elucidate", "emulate", "enervate", "ephemeral",
    "fastidious", "fatuous", "feckless", "flippant", "fortuitous"];
let guesses = "";
let word = "";
let MAX_GUESSES = 6;
let guessCount = MAX_GUESSES;
let gameOver = false;

function newGame() {
    guesses = "";
    let randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    document.getElementById("guess").value = "";
    gameOver = false;
    guessCount = MAX_GUESSES;
    updateScreen();
}

function guess() {
    if (word === "" || gameOver) {
        return;
    }
    let input = document.getElementById("guess");
    let letter = input.value;
    input.value = "";
    if (guesses.indexOf(letter) >= 0) {
        return;
    }
    if (word.indexOf(letter) < 0) {
        guessCount--;
    }
    guesses += letter;
    updateScreen();
}

function updateScreen() {
    let image = document.getElementById("hangmanpic");
    let clueString = "";
    for (let i = 0; i < word.length; i++) {
        let letter = word.charAt(i);
        if (guesses.indexOf(letter) >= 0) {
            clueString += letter + " ";

        } else { clueString += "_ "; }
    }
    if (guessCount <= 0) {
        clueString = "You lose! The word was: " + word;
        gameOver = true;
        guessCount = 0;
    } else if (clueString.indexOf("_") < 0) {
        clueString = "You win! The word was: " + word;
        gameOver = true;
        guessCount = MAX_GUESSES;
    }

    let clue = document.getElementById("clue");


    clue.textContent = clueString;
    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guessed Letters: " + guesses;


    image.src = `images/hangman${guessCount}.gif`;

}
