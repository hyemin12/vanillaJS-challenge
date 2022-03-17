const range = document.querySelector(".range-number");
const choose = document.querySelector(".choose-number");
const playBtn = document.querySelector(".submit-btn");
const gameResult = document.querySelector(".play-wrapper");

function handleRangeNumber() {
  const rangeNum = range.value;
  choose.setAttribute("max", rangeNum);
}
function handlePlaygame(event) {
  event.preventDefault();
  const rangeNumber = range.value;
  const chooseNumber = choose.value;
  const randomNumber = Math.floor(Math.random() * rangeNumber + 1);
  if (parseInt(chooseNumber, 10) === randomNumber) {
    gameResult.innerHTML = `<p>You chose: ${chooseNumber}, the machine chose: ${randomNumber}</p><p stlye="font-weight:bold">You Win!</p>`;
  } else {
    gameResult.innerHTML = `<p>You chose: ${chooseNumber}, the machine chose: ${randomNumber}</p><p stlye="font-weight:bold">You Lost!</p>`;
  }
}
range.addEventListener("input", handleRangeNumber);

playBtn.addEventListener("click", handlePlaygame);
