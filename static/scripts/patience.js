function showElapsedTime() {
  let start = new Date();
  let loader = document.getElementById("secs");

  setInterval(function () {
    let now = new Date();
    let elapsedSeconds = Math.floor((now - start) / 1000);
    loader.textContent = "Waited " + elapsedSeconds + " seconds.";
  }, 1000);
}

document.addEventListener("DOMContentLoaded", showElapsedTime);
