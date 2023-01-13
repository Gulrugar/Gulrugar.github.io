const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const nav = document.querySelector(".nav");

// new menu

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
  document.body.classList.toggle("stop-scrolling");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    document.body.classList.remove("stop-scrolling");
  });
});

window.onload = () => {
  nav.style.display = "block";
};
