const clockTitle = document.querySelector(".js-clock");

function count() {
  const xMas = new Date("2022-12-25 00:00:00");
  const today = new Date();
  const gap = xMas - today;
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((gap / (1000 * 60)) % 60);
  const seconds = Math.floor((gap / 1000) % 60);
  clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

count();
setInterval(count, 1000);
