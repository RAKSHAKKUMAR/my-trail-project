const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  createStar(event.clientX, event.clientY);
});

// ✅ For mobile touch support
bodyEl.addEventListener("touchmove", (event) => {
  const touch = event.touches[0];
  if (touch) {
    createStar(touch.clientX, touch.clientY);
  }
});

function createStar(x, y) {
  const spanEl = document.createElement("span");
  spanEl.style.left = x + "px";
  spanEl.style.top = y + "px";

  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
}
