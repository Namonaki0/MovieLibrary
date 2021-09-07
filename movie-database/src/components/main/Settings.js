import React from "react";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

export default function Settings() {
  return (
    <div className="settings-wrapper">
      <h1>Settings</h1>
      <div className="settings-options">
        <div className="color-scheme-wrapper section">
          <h2>color scheme</h2>
          <FaRegSun className="color-settings-icon" />
          <FaRegMoon className="color-settings-icon" />
        </div>
        <div className="language-wrapper section">
          <h2>language</h2>
          <div className="languages">
            <a href="#">English</a>
            <a href="#">Español</a>
            <a href="#">‎日本語</a>
          </div>
        </div>
      </div>
    </div>
  );
}
