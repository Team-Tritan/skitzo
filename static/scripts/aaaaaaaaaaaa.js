function getRandomPosition() {
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;
  let textWidth = document.getElementById("thestuff").offsetWidth;
  let textHeight = document.getElementById("thestuff").offsetHeight;

  let randomX = Math.floor(Math.random() * (screenWidth - textWidth));
  let randomY = Math.floor(Math.random() * (screenHeight - textHeight));

  return [randomX, randomY];
}

function moveText() {
  let textElement = document.getElementById("thestuff");
  let position = getRandomPosition();

  textElement.style.left = position[0] + "px";
  textElement.style.top = position[1] + "px";
}

setInterval(moveText, 300);
