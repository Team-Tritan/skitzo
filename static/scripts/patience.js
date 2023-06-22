function showElapsedTime() {
  var start = new Date();
  var loader = document.getElementById("secs");

  setInterval(function () {
    var now = new Date();
    var elapsedSeconds = Math.floor((now - start) / 1000);
    loader.textContent = "Waited " + elapsedSeconds + " seconds.";
  }, 1000);
}

document.addEventListener("DOMContentLoaded", showElapsedTime);
