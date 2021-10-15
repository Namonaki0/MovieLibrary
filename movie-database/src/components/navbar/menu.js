document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const burgerMenu = document.querySelector(".burger-menu");
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

// const nav = document.querySelector("nav");
// document.addEventListener("DOMContentLoaded", commentNumFunc);

// window.addEventListener("load", () => {
// const nav = document.querySelector("nav");
// // const commentNumFunc = async () => {
let commentLink = document.querySelector(".comment-link");
const commentNum = document.querySelectorAll(".comment");
const commentNumSpan = document.createElement("span");
if (commentLink) {
  commentNumSpan.innerHTML = commentNum.length;
  commentNumSpan.classList.add("comment-number-span");
  commentLink.appendChild(commentNumSpan);
  console.log("yes");
}

console.log(commentLink, commentNumSpan, commentNum.length);
// commentLink += commentNumSpan;
// console.log(commentNum.length);
// console.log(commentLink);
// };
// });
// commentLink.setAttribute("span", ".comment-number-span");
// console.log();
