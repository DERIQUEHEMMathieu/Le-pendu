// Creation words list
const wordsList = ['dragon', 'flemme', 'bleu', 'coder', 'manger', 'jouer', 'dormir', 'monstre', 'console', 'boire', 'baleine', 'chat', 'dauphin',
'huile', 'angle', 'armoire', 'banc', 'bureau', 'cabinet', 'carreau', 'chaise', 'classe', 'coin', 'couloir', 'dossier'];

// Functions Definition
// Choice a word
function computerChoose() {
    let index = Math.floor(Math.random() * Math.floor(24));
    let computerChoice = wordsList[index];
    return computerChoice;
}

// Change word on array 
function editWord(words) {
    let array = words.split('');
    return array;    
}

// Change word choose to underscores
function underscore(words) {
    let underScore = [];
    for (let i = 0; i < words.length; i ++) {
        underScore[i] = "_";
    }
    return underScore;
}

// Check if user write one and only one letter
function checkLetter (letter) {
    while(letter.length > 1) {
        letter = prompt("Doucement sur le clavier !" + " " + String.fromCodePoint(0x1F609) + " " + "Une seule lettre à la fois.");
    }
    while(letter.length === 0) {
        letter = prompt("Veuillez entrer une lettre pour jouer.");
    }
    return letter;
}

// Display welcome message
function welcome() {
    alert("Bonjour,\nPassez du bon temps avec ce jeu du pendu entièrement réalisé en JavaScript.");
}

// Game menu
function gameMenu() {
    let menu = prompt("Choisissez : \nj : jouer \nr : voir les règles \nq : quitter");
    while (menu) {
        if (menu === 'j') {
            main();
        }
        else if (menu === 'r') {
            alert("Voici les règles : \nUn mot choisi au hasard vous sera proposé sous forme de '_'. \nVous aurez 7 tentatives pour le découvrir en tapant une lettre à chaque essai. \nSi vous trouvez le mot, c'est gagné ! Sinon, la partie sera perdue.");
            gameMenu();
        }
        else if (menu === 'q') {
            alert("A bientôt entre deux fonctions JavaScript ! ");
            window.close();
        }
        else {
            menu = prompt("Choisissez : \nj : jouer \nr : voir les règles \nq : quitter");
        }
    }
}

// Game surveillance
function gameSurveillance(wordUnderscore) {
    let number = 0;
    for (const LETTER of wordUnderscore) {
        if (LETTER === "_") {
            number ++;
        }      
    }
    return number === 0 ?  false : true;
}

// Game code
welcome();

function main() {
    let userChoice;
    let pointsSet = 7;
    let life = 0;
    let computerChoice = computerChoose();
    let wordUnderscore = underscore(computerChoice);
    let gameInProgress = gameSurveillance(wordUnderscore);
    const ARRAY = editWord(computerChoice);

    while (pointsSet > 0 && gameInProgress) {
        userChoice = checkLetter(prompt(`Le mot a trouver est le suivant :  ${wordUnderscore} \nVous disposez de ${pointsSet} vie(s) \nTapez une lettre : ` ));

        for (let i = 0; i < ARRAY.length; i ++) {
            if (userChoice.toLowerCase() === ARRAY[i]) {
                wordUnderscore[i] = userChoice.toLowerCase();
                life ++;
            }
        }
        if(life < 1 ) {
            pointsSet --;
            indicator = 0;
        }
        else {
            life = 0;
        }
        gameInProgress = gameSurveillance(wordUnderscore);
    }
        if(pointsSet === 0) {
        alert(`Vous avez perdu. \nLe mot était : ${computerChoice}`);
        gameMenu();
        } 
        else if (!gameInProgress) {
        alert("Bravo, vous avez gagné !");
        gameMenu();
        }
}

gameMenu();
main();
