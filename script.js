const openBtn = document.querySelector(".header-openmenu");
const closeBtn = document.querySelector(".header-closemenu");
const navCloseBtn = document.querySelector(".nav-closebtn");

const navContainer = document.querySelector(".nav-container");

openBtn.addEventListener("click", function () {
  navContainer.style.left = "0px";
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
});

function closeNav() {
  navContainer.style.left = "-375px";
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
}

closeBtn.addEventListener("click", closeNav);
navCloseBtn.addEventListener("click", closeNav);
