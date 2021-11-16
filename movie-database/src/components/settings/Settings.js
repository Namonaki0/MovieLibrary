import React, { useEffect } from "react";
import { ImContrast } from "react-icons/im";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import { lightModeEnabled, lightModeDisabled } from "./colorSchemeHandler";

export default function Settings() {
  //? LANGUAGE HANDLER ------------------
  const handleChange = (e) => {
    counterpart.setLocale(e.target.attributes.value.nodeValue);
    localStorage.setItem("language", e.target.attributes.value.nodeValue);
  };
  //? LANGUAGE HANDLER ------------------

  useEffect(() => {
    //? LIGHTMODE LOCAL-STORAGE CHECKER
    if (localStorage.getItem("lightMode") === "enabled") {
      lightModeEnabled();
    } else {
      lightModeDisabled();
    }
    //? LIGHTMODE LOCAL-STORAGE CHECKER
  }, []);

  const LightModeToggle = () => {
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

    //? TOGGLES ----------------------
    burgerMenuIcon.classList.toggle("color-scheme-light-mode-icons");

    if (h1s) {
      h1s.classList.toggle("color-scheme-light-mode-title");
    }

    navBarText.forEach((text) => {
      text.classList.toggle("color-scheme-light-mode-text");
    });

    navBarIcons.forEach((icon) => {
      icon.classList.toggle("color-scheme-light-mode-icons");
    });
    navBarPath.classList.toggle("color-scheme-light-mode");

    if (navBarPath.classList.contains("color-scheme-light-mode")) {
      localStorage.setItem("lightMode", "enabled");
    } else {
      localStorage.setItem("lightMode", "disabled");
    }

    //? TOGGLES ----------------------
  };

  return (
    <div className="settings-wrapper">
      <div className="title-wrapper">
        <Translate content="settings" component="h1" />
      </div>

      <div className="settings-options">
        <div className="color-scheme-wrapper section">
          <Translate content="color" component="h2" />
          <ImContrast
            className="color-settings-icon"
            onClick={() => LightModeToggle()}
          />
        </div>
        <div className="language-wrapper section">
          <Translate content="language" component="h2" />
          <div className="languages">
            <a href="#" value="en" onClick={(e) => handleChange(e)}>
              English
            </a>
            <a href="#" value="es" onClick={(e) => handleChange(e)}>
              Español
            </a>
            <a href="#" value="jp" onClick={(e) => handleChange(e)}>
              日本語
            </a>
          </div>
        </div>
      </div>
      <span className="developed-by">
        Designed and developed by Andre Ferreira
      </span>
    </div>
  );
}
