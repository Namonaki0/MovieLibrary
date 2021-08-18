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

    // const menuLinks = document.querySelectorAll(".menu-link");

    // menuLinks.forEach((menuLink) => {
    //   menuLink.addEventListener("click", () => {
    //     console.log("clicked");
    //     if (nav.classList.contains("menu-active")) {
    //       nav.classList.remove("menu-active");
    //     }
    //   });
    // });
  });
});
