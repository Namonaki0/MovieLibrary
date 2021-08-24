document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-icon");
  const nav = document.querySelector("nav");

  menu.addEventListener("click", function menuBehavior() {
    const linkTexts = document.querySelectorAll(".link-text");

    nav.classList.toggle("menu-active");

    linkTexts.forEach((linkText) => {
      if (nav.classList.contains("menu-active")) {
        linkText.classList.add("text-showing");
      } else {
        linkText.classList.remove("text-showing");
      }
    });
  });
});
