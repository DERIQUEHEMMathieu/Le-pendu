// Function
function askCommand() {
    // Use const because commands are not supposed to be reassigned
    const commands = ["j", "r", "q"];
    let command = "";
    // While the command from the user is not valid we ask a command
    while(!commands.includes(command)) {
      command = prompt("Que souhaitez-vous faire : j : jouer, r : règles, q : quitter");
    }
    return command;
  }
  
  function getRandomWord() {
    // Use of const because we are not going to reassign the words in the game
    const words = ["banane", "terre", "voiture", "jouet"];
    let index = Math.floor(Math.random() * Math.floor(words.length));
    return words[index];
  }
  
  // Based on the word choosen by the commputer, return an array of same size with "_"
  function getEmptyArray(word) {
    let result = []
    for (let letter of word) {
      result.push("_");
    }
    return result;
  }
  
  // Ask the user for a letter and checks he gives only one
  function askLetter(guess, score) {
    let letter;
    do {
      letter = prompt(score + " coups restant, mot à deviner : \n" + guess.join(' '));
    } while (letter.length !== 1);
    return letter;
  }
  
  // Replace the "_" in guess array by the right letter at the right position
  function updateGuess(word, guess, letter) {
    for (let i = 0; i < word.length; i++) {
      if(word[i] === letter) {
        guess[i] = letter
      }
    }
    return guess;
  }
  
  // The main function lauching the game
  function play() {
    let score = 7;
    let word = getRandomWord();
    let guess = getEmptyArray(word);
  
    while (guess.includes("_") && score > 0) {
      let letter = askLetter(guess, score);
      // If one letter has be found
      if (word.includes(letter)) {
        guess = updateGuess(word, guess, letter);
      }
      else {
        score --;
      }
    }
    // Once the loop has stooped, someone either won or loose
    if(score === 0) {
      alert("Vous avez été pendu !");
    }
    else {
      alert("Bravo, le mot était : " + word);
    }
  }
  
  
  // Logic
  // The programme runs as long as the user does not want to quit, so the loop is infinite
  while(true) {
    let command = askCommand();
    // Realize different actions according to the command
    if(command === "j") {
      play();
    }
    else if(command === "r") {
      alert("Voici les règles du jeu");
    }
    else {
      alert("A bientôt");
      break;
    }
  }