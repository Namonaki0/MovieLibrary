import { link } from "fs";

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".burger-menu");
  const nav = document.querySelector("nav");
  const linkTexts = document.querySelectorAll(".link-text");
  const menuLinks = document.querySelectorAll(".menu-link");

  menu.addEventListener("click", () => {
    nav.classList.toggle("menu-active");

    nav.addEventListener("transitionend", () => {
      linkTexts.forEach((linkText) => {
        if (nav.classList.contains("menu-active")) {
          linkText.classList.add("text-showing");
        } else {
          linkText.classList.remove("text-showing");
          nav.classList.remove("menu-active");
        }
      });
    });
  });

  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", () => {
      nav.classList.remove("menu-active");

      linkTexts.forEach((linkText) => {
        linkText.classList.remove("text-showing");
      });
    });
  });
});

window.addEventListener("click", (e) => {
  console.log(e.target);
});
