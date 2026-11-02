let POSSIBLE_WORDS = ["obdurate", "aberration", "abnegation", "abrogate", "abscond",
    "abstruse", "accolade", "acumen", "adulation", "aegis",
    "affable", "alacrity", "altruistic", "ambivalent", "ameliorate",
    "anachronistic", "anathema", "antithesis", "apocryphal", "approbation"];

function newGame() {
    let randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    let selectedWord = POSSIBLE_WORDS[randomIndex];
}