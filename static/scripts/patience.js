function showElapsedTime() {
  var start = new Date();
  var loader = document.getElementById("loader");

  setInterval(function () {
    var now = new Date();
    var elapsedSeconds = Math.floor((now - start) / 1000);
    loader.textContent = "Loading... " + elapsedSeconds + "s";
  }, 1000);
}

document.addEventListener("DOMContentLoaded", showElapsedTime);
