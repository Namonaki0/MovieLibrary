import firebase from "../utils/firebase";

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const burgerMenu = document.querySelector(".burger-menu");
  const linkTexts = document.querySelectorAll(".link-text");
  const menuLinks = document.querySelectorAll(".menu-link");

  if (burgerMenu) {
    //? MENU TOGGLE, EFFECTS AND COMMENT NUMBER PILL IN NAVBAR
    burgerMenu.addEventListener("click", () => {
      nav.classList.toggle("menu-active");

      nav.addEventListener("transitionend", (e) => {
        const commentNumSpan = document.querySelector(".comment-number-span");
        const openMenuCommentNumSpan = document.querySelector(
          ".open-menu-comment-number-span"
        );

        const parentNode = e.target.parentNode.offsetParent;

        linkTexts.forEach((linkText) => {
          if (nav.style.width === "16rem") {
            linkText.classList.add("text-showing");
            openMenuCommentNumSpan.style.display = "block";
            commentNumSpan.style.display = "none";
          } else if (parentNode.classList.contains("menu-active")) {
            linkText.classList.remove("text-showing");
            nav.classList.remove("menu-active");
            openMenuCommentNumSpan.style.display = "block";
            commentNumSpan.style.display = "none";
          } else {
            openMenuCommentNumSpan.style.display = "none";
            commentNumSpan.style.display = "block";
            linkText.classList.remove("text-showing");
            nav.classList.remove("menu-active");
          }
        });
      });
    });
  }

  menuLinks.forEach((menuLink) => {
    const nav = document.querySelector("nav");
    menuLink.addEventListener("click", () => {
      nav.classList.remove("menu-active");

      linkTexts.forEach((linkText) => {
        linkText.classList.remove("text-showing");
      });
    });
  });

  //? FIREBASE COMMENT COUNT PILL HANDLER
  const commentRef = firebase.database().ref("Comments");

  commentRef.on("value", (comment) => {
    const allComments = comment.val();

    if (allComments === null) return;
  });
});
