// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika icon menu di click
document.querySelector("#reza_hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik diluar sidebar untuk close menu
const hamburger = document.querySelector("#reza_hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
