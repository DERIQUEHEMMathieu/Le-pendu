// Creation words list
const wordsList = ['dragon', 'flemme', 'bleu', 'coder', 'manger', 'jouer', 'dormir', 'monstre', 'console', 'boire', 'baleine', 'chat', 'dauphin',
'huile', 'angle', 'armoire', 'banc', 'bureau', 'cabinet', 'carreau', 'chaise', 'classe', 'coin', 'couloir', 'dossier',
'ecole', 'entrer', 'escalier', 'etagere', 'exterieur', 'fenetre', 'interieur', 'lavabo', 'marche', 'matelas', 'maternelle',
'meuble', 'mousse', 'peluche', 'placard', 'plafond', 'porte', 'poubelle', 'radiateur', 'rampe', 'rideau', 'robinet'];

// Functions Definition
// Choice a word
function computerChoose () {
    let index = Math.floor(Math.random() * Math.floor(46));
    let computerChoice = wordsList[index];
    return computerChoice;
}

// Change word on array 
function transformWord (words) {
    let table = words.split('');
    return table;    
}

// Change word choose to underscores
function underscore (words) {
    let underScore = [];
    for (let i = 0; i < words.length; i ++){
        underScore[i] = "_";
    }
    return underScore;
}

// Check if user write one and only one letter
function checkLetter (letter) {
    while(letter.length > 1){
        letter = prompt("Doucement sur le clavier !" + " " + String.fromCodePoint(0x1F609) + " " + "Une seule lettre à la fois.");
    }
    return letter;
}