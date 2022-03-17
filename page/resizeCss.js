const container = document.querySelector("div.container");

function handleResized() {
  let innerWidth = window.innerWidth;
  if (innerWidth > 1300) {
    container.classList.add("orange");
    container.classList.remove("violet");
  } else if (innerWidth > 1000) {
    container.classList.add("violet");
    container.classList.remove("orange");
  } else {
    container.classList.remove("orange", "violet");
  }
}

window.addEventListener("resize", handleResized);
