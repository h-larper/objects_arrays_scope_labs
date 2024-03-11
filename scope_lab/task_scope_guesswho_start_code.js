// // // GUESS 1 ///////////////////
// let guess = {
//   hair_colour: "red",
//   eye_colour: "blue",
//   hat: false,
//   glasses: true,
//   firstName: "Joseph",
// };

// const guessWho = function () {
//   return `Guess who is ${guess.firstName}`;
// };

// const finalAnswer = guessWho();
// console.log(finalAnswer);

// // Prediction: Joesph

// // // GUESS 2 ///////////////////

// let firstName = "Donna";

// const guessWho = function () {
//   const glasses = false;
//   let firstName = "Liz";
//   return `Guess Who is ${firstName}.`;
// };

// const guess1 = guessWho();
// console.log("guess1: ", guess1);
// // // Prediction: Liz

// const guess2 = `Guess Who is ${firstName}`;
// console.log("guess2: ", guess2);
// // // Prediction: Donna


// // GUESS 3 ///////////////////

// const guess = {
//   hair_colour: "black",
//   eye_colour: "brown",
//   hat: false,
//   glasses: false,
//   firstName: "Andy",
// };

// const changeHat = function () {
//   guess.hat = !guess.hat;           // hat = true?
// };

// const changeGuess = function (newName) {
//   guess.firstName = newName;      // change to a new name
// };

// const guessWho = function () {
//   return `Guess Who is ${guess.firstName}`;   // return means print?
// };

// changeHat();

// if (guess.hat) {
//   changeGuess("Chris");
// }

// const finalAnswer = guessWho();
// console.log(finalAnswer);

// // Prediction: Chris

// // GUESS 4 ///////////////////

// let firstName = "Gail";

// if (firstName === "Gail") {       
//   let firstName = "Ashley";
// }

// const guessWho = function () {          // const therefore represents the global scope therefore looks at first time variable created
//   return `Guess Who is ${firstName}`;
// };

// const finalAnswer = guessWho();
// console.log(finalAnswer);

// // Prediction: Gail

// // GUESS 5 ///////////////////

const guess = {
  hair_colour: "blonde",
  eye_colour: "brown",
  hat: false,
  glasses: false,
  firstName: "Jennifer",
};

const changeGuess = function () {
  guess = {
    hair_colour: "blonde",
    eye_colour: "blue",
    hat: false,
    glasses: false,
    firstName: "Kyle",
  };
};

changeGuess();
console.log(`Guess Who is ${guess.firstName}`);

// Prediction: