const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");

const superEventHandler = {
  handleEnter: function handleEnter() {
    title.innerText = "The mouse is Here!";
    title.style.color = colors[0];
  },
  handleLeave: function handleLeave() {
    title.innerText = "The mouse is Gone!";
    title.style.color = colors[1];
  },
  handleResize: function handleResize() {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },
  handleContextmenu: function handleContextmenu() {
    title.innerText = "That was a right click!";
    title.style.color = colors[4];
  },
};

title.addEventListener("mouseenter", superEventHandler.handleEnter);
title.addEventListener("mouseleave", superEventHandler.handleLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleContextmenu);
