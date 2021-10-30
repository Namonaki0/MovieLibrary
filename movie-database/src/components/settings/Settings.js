import React, { useState } from "react";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { ImContrast } from "react-icons/im";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import en from "../../languages/en";
import es from "../../languages/es";
import jp from "../../languages/jp";

console.log(jp);

export default function Settings() {
  const [languageValue, setLanguageValue] = useState(null);

  counterpart.registerTranslations("jp", { languageValue });

  counterpart.setLocale("en", en);
  counterpart.setLocale("es", es);
  counterpart.setLocale("jp", jp);

  console.log(languageValue);
  return (
    <div className="settings-wrapper">
      <Translate content="settings" component="h1" />
      {/* <h1>Settings</h1> */}
      <div className="settings-options">
        <div className="color-scheme-wrapper section">
          <h2>color scheme</h2>
          {/* <FaRegSun className="color-settings-icon" /> */}
          {/* <FaRegMoon className="color-settings-icon" /> */}
          <ImContrast className="color-settings-icon" />
        </div>
        <div className="language-wrapper section">
          <h2>language</h2>
          <div className="languages">
            <a
              href="#"
              value="en"
              onClick={(e) => {
                setLanguageValue(e.target.attributes.value.nodeValue);
                console.log(jp.comments);
              }}
            >
              English
            </a>
            <a
              href="#"
              value="es"
              onClick={(e) => {
                setLanguageValue(e.target.attributes.value.nodeValue);
              }}
            >
              Español
            </a>
            <a
              href="#"
              value="jp"
              onClick={(e) => {
                setLanguageValue(e.target.attributes.value.nodeValue);
              }}
            >
              ‎日本語
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
