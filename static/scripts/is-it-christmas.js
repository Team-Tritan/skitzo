function isChristmas() {
  let date = new Date();
  let month = date.getMonth() + 1; // Months are zero-based
  let day = date.getDate();

  if (month === 12 && day === 25) {
    return true;
  } else {
    return false;
  }
}

function updateResult() {
  let resultElement = document.getElementById("result");
  if (isChristmas()) {
    resultElement.innerHTML = "YES";
  } else {
    resultElement.innerHTML = "NO";
  }
}
