function getRandomCharacter() {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|\\:\"'<>,.?/~`-=";
  return characters.charAt(Math.floor(Math.random() * characters.length));
}

function generateRandomCharacter() {
  let char = getRandomCharacter();
  let span = document.createElement("span");
  span.className = "random-char";
  span.textContent = char;

  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;

  let randomX = Math.floor(Math.random() * screenWidth);
  let randomY = Math.floor(Math.random() * screenHeight);

  span.style.left = randomX + "px";
  span.style.top = randomY + "px";

  document.body.appendChild(span);
}

function startSpamming() {
  setInterval(generateRandomCharacter, 1);
}

startSpamming();
