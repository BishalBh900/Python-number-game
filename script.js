let target = generateRandom();
let attempts = 0;
let gameOver = false;

function generateRandom() {
  return Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
  if (gameOver) return;

  const input = document.getElementById("guessInput").value.trim();
  const message = document.getElementById("message");
  const attemptsEl = document.getElementById("attempts");

  if (input.toLowerCase() === 'q') {
    message.textContent = `You quit! The number was ${target}.`;
    message.className = "message fail";
    gameOver = true;
    return;
  }

  const guess = parseInt(input);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "⚠️ Please enter a valid number between 1 and 100!";
    message.className = "message fail";
    return;
  }

  attempts++;
  attemptsEl.textContent = `Attempts: ${attempts}`;

  if (guess === target) {
    message.textContent = `🎉 Correct! You guessed the number in ${attempts} attempts.`;
    message.className = "message success";
    gameOver = true;
  } else if (guess < target) {
    message.textContent = "🔼 Too low! Try a bigger number.";
    message.className = "message fail";
  } else {
    message.textContent = "🔽 Too high! Try a smaller number.";
    message.className = "message fail";
  }

  document.getElementById("guessInput").value = "";
}

function resetGame() {
  target = generateRandom();
  attempts = 0;
  gameOver = false;
  document.getElementById("guessInput").value = "";
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "Attempts: 0";
}
