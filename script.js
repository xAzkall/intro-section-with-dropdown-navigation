const hamburgerIcon = document.querySelector(".hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLi = document.querySelectorAll(".mobile-menu li");
const dropdownMenu = document.querySelector(".dropdown");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("close");
  mobileMenu.classList.toggle("hidden");
});

mobileMenuLi.forEach((item) => {
  item.addEventListener("click", () => {
    item.lastElementChild.classList.toggle("hidden");
  });
});
