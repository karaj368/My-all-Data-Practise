// document.querySelector(".number").textContent = 20;
// document.querySelector(".message").textContent = "🎉 Corret Number!";
// document.querySelector(".score-box").textContent = 12;
// document.querySelector(".guess").value = 22;

let secretnumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretnumber;

let score = 20;
let highscore = 0;

document.querySelector(".chk-btn").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when guess is high
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";

    //when player wins
  } else if (guess === secretnumber) {
    document.querySelector(".message").textContent = "🎉 Corret Number!";
    document.querySelector(".number").textContent = secretnumber;
    document.querySelector("#bg").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.color = "#60b347";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".high-score").textContent = highscore;
    }

    // when guess is very high
  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🔥 Too High Value";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "😜 Your Are Lose The Game";
      document.querySelector(".score").textContent = 0;
    }

    // when guess is low
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "😜 Your Are Lose The Game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// for reset game

document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("#bg").style.backgroundColor = "black";
  document.querySelector(".number").style.color = "black";
});
