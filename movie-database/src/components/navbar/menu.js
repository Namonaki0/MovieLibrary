document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const nav = document.querySelector("nav");
  const linkTexts = document.querySelectorAll(".link-text");
  const menuLinks = document.querySelectorAll(".menu-link");
  const lightModeIcon = document.querySelector(".color-settings-icon");
  const settingsWrapper = document.querySelector(".settings-wrapper");

  if (burgerMenu) {
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
  }

  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", () => {
      nav.classList.remove("menu-active");

      linkTexts.forEach((linkText) => {
        linkText.classList.remove("text-showing");
      });
    });
  });
});

// commentLink.setAttribute("span", ".comment-number-span");
// console.log();

// const commentNumFunc = async () => {
let commentLink = document.querySelector(".comment-link");
const commentNumSpan = document.createElement("span");
const commentNum = document.querySelectorAll(".comment");
commentNumSpan.innerHTML = commentNum.length;
commentNumSpan.classList.add("comment-number-span");
// commentLink.appendChild(commentNumSpan);
// commentLink += commentNumSpan;

console.log(commentNum.length);
console.log(commentLink);
// };

// document.addEventListener("DOMContentLoaded", commentNumFunc);
