const lightModeEnabled = () => {
  //? PATHS ------------------------
  const burgerMenuIcon = document.querySelector(
    "#root > div > nav > ul > li > svg"
  );
  const h1s = document.querySelector("#root > div > div > .title-wrapper");
  const formBg = document.querySelector("#root > div > div > form");
  const navBarPath = document.querySelector("#root > div > nav > ul");
  const navBarIcons = document.querySelectorAll(
    "#root > div > nav > ul > a > li > svg"
  );
  const navBarText = document.querySelectorAll(
    "#root > div > nav > ul > a > li > a > span"
  );
  //? PATHS ------------------------

  burgerMenuIcon.classList.add("color-scheme-light-mode-icons");

  if (h1s) {
    h1s.classList.add("color-scheme-light-mode-title");
  }
  if (formBg) {
    formBg.classList.add("color-scheme-light-mode-title");
  }

  navBarText.forEach((text) => {
    text.classList.add("color-scheme-light-mode-text");
  });

  navBarIcons.forEach((icon) => {
    icon.classList.add("color-scheme-light-mode-icons");
  });
  navBarPath.classList.add("color-scheme-light-mode");
};

const lightModeDisabled = () => {
  //? PATHS ------------------------
  const burgerMenuIcon = document.querySelector(
    "#root > div > nav > ul > li > svg"
  );
  const h1s = document.querySelector("#root > div > div > .title-wrapper");
  const navBarPath = document.querySelector("#root > div > nav > ul");
  const navBarIcons = document.querySelectorAll(
    "#root > div > nav > ul > a > li > svg"
  );
  const navBarText = document.querySelectorAll(
    "#root > div > nav > ul > a > li > a > span"
  );
  //? PATHS ------------------------

  burgerMenuIcon.classList.remove("color-scheme-light-mode-icons");

  if (h1s) {
    h1s.classList.remove("color-scheme-light-mode-title");
  }

  navBarText.forEach((text) => {
    text.classList.remove("color-scheme-light-mode-text");
  });

  navBarIcons.forEach((icon) => {
    icon.classList.remove("color-scheme-light-mode-icons");
  });
  navBarPath.classList.remove("color-scheme-light-mode");
};

export { lightModeEnabled, lightModeDisabled };
