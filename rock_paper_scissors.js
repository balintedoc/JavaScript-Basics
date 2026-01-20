const c = ["rock", "paper", "scissors"];
let u = c[Math.random()*3|0];
let p = c[Math.random()*3|0];

console.log(u, p,
  u === p ? "Tie" :
  (u === "rock" && p === "scissors") ||
  (u === "paper" && p === "rock") ||
  (u === "scissors" && p === "paper")
  ? "User wins" : "Computer wins"
);
