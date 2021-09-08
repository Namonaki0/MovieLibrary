import { link } from "fs";
import { FaDribbbleSquare } from "react-icons/fa";

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const nav = document.querySelector("nav");
  const linkTexts = document.querySelectorAll(".link-text");
  const menuLinks = document.querySelectorAll(".menu-link");

  burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("menu-active");

    nav.addEventListener("transitionend", (e) => {
      //? NEEDS ATTENTION
      const parentNode = e.target.parentNode.offsetParent;
      ////////////////?
      linkTexts.forEach((linkText) => {
        if (nav.classList.contains("menu-active")) {
          linkText.classList.add("text-showing");
        } else if (parentNode.classList.contains("menu-active")) {
          linkText.classList.remove("text-showing");
          nav.classList.remove("menu-active");
          console.log("yeah");
        } else {
          linkText.classList.remove("text-showing");
          nav.classList.remove("menu-active");
        }
      });
    });
  });

  burgerMenu.addEventListener("click", (e) => {
    console.dir(e.target.parentNode.offsetParent);
  });

  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", () => {
      nav.classList.remove("menu-active");

      linkTexts.forEach((linkText) => {
        linkText.classList.remove("text-showing");
      });
    });
  });

  //? LOCAL STORAGE
  const localStorageState = localStorage.getItem("light-mode") || [];

  console.log(localStorageState);

  //? LIGHT MODE SETTINGS
  const lightModeIcon = document.querySelector(".color-settings-icon");

  lightModeIcon.addEventListener("click", () => {
    const menuIcons = document.querySelectorAll(".menu-link svg");
    const burgerMenuIcon = document.querySelector(".burger-menu svg");

    nav.classList.toggle("nav-light-mode");

    burgerMenuIcon.classList.toggle("text-light-mode");

    linkTexts.forEach((linkText) => {
      linkText.classList.toggle("text-light-mode");
    });
    menuLinks.forEach((menuLink) => {
      menuLink.classList.toggle("text-light-mode");
    });
    menuIcons.forEach((menuIcon) => {
      menuIcon.classList.toggle("text-light-mode");
    });
  });
});
