function isChristmas() {
  var date = new Date();
  var month = date.getMonth() + 1; // Months are zero-based
  var day = date.getDate();

  if (month === 12 && day === 25) {
    return true;
  } else {
    return false;
  }
}

function updateResult() {
  var resultElement = document.getElementById("result");
  if (isChristmas()) {
    resultElement.innerHTML = "YES";
  } else {
    resultElement.innerHTML = "NO";
  }
}
