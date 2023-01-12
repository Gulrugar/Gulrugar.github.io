const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const nav = document.querySelector("nav");

// new menu
const overlay = document.getElementById("overlay");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

window.onload = () => {
  nav.style.display = "block";
};
