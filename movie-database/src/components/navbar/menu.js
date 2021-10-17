document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const burgerMenu = document.querySelector(".burger-menu");
  const linkTexts = document.querySelectorAll(".link-text");
  const menuLinks = document.querySelectorAll(".menu-link");
  const lightModeIcon = document.querySelector(".color-settings-icon");
  const settingsWrapper = document.querySelector(".settings-wrapper");
  const commentNumSpan = document.querySelector(".comment-number-span");
  const openMenuCommentNumSpan = document.querySelector(
    ".open-menu-comment-number-span"
  );
  const storedComments = JSON.parse(localStorage.comments);

  if (storedComments.length < 1) {
    commentNumSpan.style.display = "none";
    openMenuCommentNumSpan.style.display = "none";
  }

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
            openMenuCommentNumSpan.style.display = "block";
            commentNumSpan.style.display = "none";
          } else if (parentNode.classList.contains("menu-active")) {
            linkText.classList.remove("text-showing");
            nav.classList.remove("menu-active");
          } else {
            openMenuCommentNumSpan.style.display = "none";
            linkText.classList.remove("text-showing");
            nav.classList.remove("menu-active");
            commentNumSpan.style.display = "";
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
