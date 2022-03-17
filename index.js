// TAB
const tabs = document.querySelectorAll(".tab-list>li");
const tabNames = document.querySelectorAll(".file-list>li");
console.log(tabs, tabNames);

for (let a = 0; a < tabs.length; a++) {
  tabNames[a].addEventListener("click", function () {
    for (let b = 0; b < tabs.length; b++) {
      tabNames[b].classList.remove("active");
      tabs[b].classList.remove("active");
    }
    tabs[a].classList.add("active");
    tabNames[a].classList.add("active");
  });
}
