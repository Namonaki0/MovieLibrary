const lightModeEnabled = () => {
  //? PATHS ------------------------
  const burgerMenuIcon = document.querySelector(
    "#root > div > nav > ul > li > svg"
  );
  const navBarPath = document.querySelector("#root > div > nav > ul");
  const navBarIcons = document.querySelectorAll(
    "#root > div > nav > ul > a > li > svg"
  );
  const navBarText = document.querySelectorAll(
    "#root > div > nav > ul > a > li > a > span"
  );
  //? PATHS ------------------------

  burgerMenuIcon.classList.add("color-scheme-light-mode-icons");

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
  const navBarPath = document.querySelector("#root > div > nav > ul");
  const navBarIcons = document.querySelectorAll(
    "#root > div > nav > ul > a > li > svg"
  );
  const navBarText = document.querySelectorAll(
    "#root > div > nav > ul > a > li > a > span"
  );
  //? PATHS ------------------------

  burgerMenuIcon.classList.remove("color-scheme-light-mode-icons");

  navBarText.forEach((text) => {
    text.classList.remove("color-scheme-light-mode-text");
  });

  navBarIcons.forEach((icon) => {
    icon.classList.remove("color-scheme-light-mode-icons");
  });
  navBarPath.classList.remove("color-scheme-light-mode");
};

export { lightModeEnabled, lightModeDisabled };
