function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function createDice(result, p) {
  var dots = document.querySelectorAll("#" + p + " .dot");
  for (var i = 0; i < 9; i++) {
    if (result === 1) {
      if (i !== 4) {
        dots[i].classList.add("disable");
      }
    } else if (result === 2) {
      if (i !== 0 && i != 8) {
        dots[i].classList.add("disable");
      }
    } else if (result === 3) {
      if (i !== 0 && i != 4 && i !== 8) {
        dots[i].classList.add("disable");
      }
    } else if (result === 4) {
      if (i !== 0 && i != 2 && i !== 6 && i != 8) {
        dots[i].classList.add("disable");
      }
    } else if (result === 5) {
      if (i % 2 !== 0) {
        dots[i].classList.add("disable");
      }
    } else {
      dots[1].classList.add("disable");
      dots[4].classList.add("disable");
      dots[7].classList.add("disable");
    }
  }
}
var p1 = rollDice();
createDice(p1, "p1");
var p2 = rollDice();
createDice(p2, "p2");

if (p1 > p2) {
  document.querySelector("h1").id = "p1-winner";
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (p1 < p2) {
  document.querySelector("h1").id = "p2-winner";
  document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
  document.querySelector("h1").textContent = "It's a Tie!";
}
