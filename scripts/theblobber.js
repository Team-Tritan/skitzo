document.addEventListener("DOMContentLoaded", function (event) {
  let container = document.getElementById("container");
  let blob = document.getElementById("blob");

  let containerRect = container.getBoundingClientRect();
  let containerWidth = containerRect.width;
  let containerHeight = containerRect.height;

  let mouseX = containerWidth / 2;
  let mouseY = containerHeight / 2;

  let blobX = containerWidth / 2;
  let blobY = containerHeight / 2;

  let blobSpeed = 7;

  container.addEventListener("mousemove", function (event) {
    mouseX = event.clientX - containerRect.left;
    mouseY = event.clientY - containerRect.top;
  });

  setInterval(moveBlob, 16);

  function moveBlob() {
    let distanceX = mouseX - blobX;
    let distanceY = mouseY - blobY;
    let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance > 1) {
      let directionX = distanceX / distance;
      let directionY = distanceY / distance;

      let speedX = -directionX * blobSpeed;
      let speedY = -directionY * blobSpeed;

      blobX += speedX;
      blobY += speedY;

      if (blobX < 0) {
        blobX = 0;
        speedX *= -1;
      } else if (blobX + blob.clientWidth > containerWidth) {
        blobX = containerWidth - blob.clientWidth;
        speedX *= -1;
      }

      if (blobY < 0) {
        blobY = 0;
        speedY *= -1;
      } else if (blobY + blob.clientHeight > containerHeight) {
        blobY = containerHeight - blob.clientHeight;
        speedY *= -1;
      }

      blob.style.left = blobX + "px";
      blob.style.top = blobY + "px";
    }
  }

  setTimeout(function () {
    alert("you got blobbered");
  }, 60000);
});
