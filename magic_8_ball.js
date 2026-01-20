let question = prompt("Ask the Magic 8 Ball a question:");

let answers = [
  "Yes",
  "No",
  "Maybe",
  "Ask again later",
  "Definitely",
  "I don't think so"
];

let randomIndex = Math.floor(Math.random() * answers.length);
let response = answers[randomIndex];

console.log("Magic 8 Ball says:", response);