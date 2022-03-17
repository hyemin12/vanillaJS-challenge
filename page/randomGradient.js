const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];
const btn = document.querySelector("button");
const back = document.querySelector(".challenge-html");
function handleGradient() {
  const random = Math.floor(Math.random() * colors.length);
  let random2 = Math.floor(Math.random() * colors.length);
  if (random !== random2) {
    back.style.background = `linear-gradient(120deg,${colors[random]}, ${colors[random2]})`;
  } else {
    random2 = Math.floor(Math.random() * colors.length);
    back.style.background = `linear-gradient(120deg,${colors[random]}, ${colors[random2]})`;
  }
}
btn.addEventListener("click", handleGradient);
