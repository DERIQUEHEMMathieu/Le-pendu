// Creation words list
const wordsList = ['dragon', 'flemme', 'bleu', 'coder', 'manger', 'jouer', 'dormir', 'monstre', 'console', 'boire', 'baleine', 'chat', 'dauphin',
'huile', 'angle', 'armoire', 'banc', 'bureau', 'cabinet', 'carreau', 'chaise', 'classe', 'coin', 'couloir', 'dossier',
'ecole', 'entrer', 'escalier', 'etagere', 'exterieur', 'fenetre', 'interieur', 'lavabo', 'marche', 'matelas', 'maternelle',
'meuble', 'mousse', 'peluche', 'placard', 'plafond', 'porte', 'poubelle', 'radiateur', 'rampe', 'rideau', 'robinet'];

// Functions Definition
// Choice a word
function computerChoose() {
    let index = Math.floor(Math.random() * Math.floor(46));
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
    return letter;
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
function main () {
    alert("Bonjour,\nPassez du bon temps avec ce jeu du pendu entièrement réalisé en JavaScript");
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
        } 
        else if (!gameInProgress) {
        alert("Bravo, vous avez gagné !");
        }
}
main();