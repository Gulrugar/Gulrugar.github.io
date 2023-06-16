const mobileToggle = document.querySelector(".mobile-menu__toggle");
const mobileLinks = document.querySelectorAll(".mobile-menu__link");
const mobileMenu = document.querySelector(".mobile-menu");

// new menu
function openMenu() {
  document.body.classList.toggle("mobile-open");
  document.body.classList.toggle("stop-scrolling");
}

function closeMenu() {
  document.body.classList.remove("mobile-open");
  document.body.classList.remove("stop-scrolling");
  mobileToggle.blur();
}

mobileToggle.addEventListener("click", openMenu);

mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Mobile Menu is hidden by default so that it doesn't show on page load. This code makes it visible once the page is loaded.
window.onload = () => {
  mobileMenu.style.display = "block";
};

// Close Mobile Menu if open on window resize > 800px

const mediaQuery = window.matchMedia("(min-width: 800px)");

function handleMediaQueryChange(mediaQuery) {
  if (mediaQuery.matches) {
    closeMenu();
  }
}

mediaQuery.addEventListener("change", handleMediaQueryChange);
