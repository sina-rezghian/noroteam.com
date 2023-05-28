const primaryNav = document.querySelector(".nav-ul");
const navToggle = document.querySelector(".mobile-toggle");

navToggle.addEventListener("click", function () {
  const accf = primaryNav.getAttribute("data-visible");

  if (accf === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (accf === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
