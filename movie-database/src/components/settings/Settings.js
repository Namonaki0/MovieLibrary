import React from "react";
import { ImContrast } from "react-icons/im";
import counterpart from "counterpart";
import Translate from "react-translate-component";

export default function Settings() {
  //? LANGUAGE HANDLER ------------------
  const handleChange = (e) => {
    counterpart.setLocale(e.target.attributes.value.nodeValue);
    localStorage.setItem("language", e.target.attributes.value.nodeValue);
  };
  //? LANGUAGE HANDLER ------------------

  return (
    <div className="settings-wrapper">
      <Translate content="settings" component="h1" />

      <div className="settings-options">
        <div className="color-scheme-wrapper section">
          <Translate content="color" component="h2" />
          <ImContrast className="color-settings-icon" />
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
