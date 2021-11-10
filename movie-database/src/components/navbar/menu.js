document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const burgerMenu = document.querySelector(".burger-menu");
  const linkTexts = document.querySelectorAll(".link-text");
  const menuLinks = document.querySelectorAll(".menu-link");

  if (burgerMenu) {
    burgerMenu.addEventListener("click", () => {
      nav.classList.toggle("menu-active");

      nav.addEventListener("transitionend", (e) => {
        const commentNumSpan = document.querySelector(".comment-number-span");
        const openMenuCommentNumSpan = document.querySelector(
          ".open-menu-comment-number-span"
        );

        //? NEEDS ATTENTION
        const parentNode = e.target.parentNode.offsetParent;
        ////////////////?
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

  commentNumSpanCounter();
});

//* DONE
const commentNumSpanCounter = () => {
  const commentNumSpan = document.querySelector(".comment-number-span");
  const openMenuCommentNumSpan = document.querySelector(
    ".open-menu-comment-number-span"
  );
  const storedComments = JSON.parse(localStorage.comments);
  if (storedComments.length === 0) {
    commentNumSpan.style.display = "none";
    openMenuCommentNumSpan.style.display = "none";
  }
};
