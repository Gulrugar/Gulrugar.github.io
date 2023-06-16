const mobileToggle = document.querySelector(".mobile-menu__toggle");
const mobileLinks = document.querySelectorAll(".mobile-menu__link");
const mobileMenu = document.querySelector(".mobile-menu");

// new menu

mobileToggle.addEventListener("click", () => {
  document.body.classList.toggle("mobile-open");
  document.body.classList.toggle("stop-scrolling");
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("mobile-open");
    document.body.classList.remove("stop-scrolling");
  });
});

window.onload = () => {
  mobileMenu.style.display = "block";
};
