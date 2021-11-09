import React, { useState } from "react";
import { ImContrast } from "react-icons/im";
import counterpart from "counterpart";
import Translate from "react-translate-component";

export default function Settings() {
  let [lightMode, setLightMode] = useState(null);

  //? LANGUAGE HANDLER ------------------
  const handleChange = (e) => {
    counterpart.setLocale(e.target.attributes.value.nodeValue);
    localStorage.setItem("language", e.target.attributes.value.nodeValue);
  };
  //? LANGUAGE HANDLER ------------------

  const navBarLightModeToggle = () => {
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
    //? TOGGLES ----------------------
    burgerMenuIcon.classList.toggle("color-scheme-light-mode-icons");

    navBarText.forEach((text) => {
      text.classList.toggle("color-scheme-light-mode-text");
    });
    navBarIcons.forEach((icon) => {
      icon.classList.toggle("color-scheme-light-mode-icons");
    });
    navBarPath.classList.toggle("color-scheme-light-mode");

    if (navBarPath.classList.contains("color-scheme-light-mode")) {
      setLightMode(true);
      localStorage.setItem("lightMode", !lightMode);
    } else {
      setLightMode(null);
      localStorage.setItem("lightMode", !lightMode);
    }
    //? TOGGLES ----------------------
  };

  console.log(lightMode);

  return (
    <div className="settings-wrapper">
      <Translate content="settings" component="h1" />

      <div className="settings-options">
        <div className="color-scheme-wrapper section">
          <Translate content="color" component="h2" />
          <ImContrast
            className="color-settings-icon"
            onClick={() => navBarLightModeToggle()}
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
    </div>
  );
}
