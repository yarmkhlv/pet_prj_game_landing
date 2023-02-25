const navBtn = document.querySelector(".nav-button");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.body;

const mobileToggle = function () {
  mobileNav.classList.toggle("mobile-nav-active");
  navBtn.classList.toggle("nav-button-close");
  body.classList.toggle("no-scroll");
};

navBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  mobileToggle();
});

window.addEventListener("click", () => {
  if (body.classList.contains("no-scroll")) {
    mobileToggle();
  }
});

mobileNav.addEventListener("click", (event) => {
  event.stopPropagation();
});
