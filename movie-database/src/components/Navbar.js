import React from "react";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#"></a>
        </li>
        <li>
          <FaGithub class="icons"/>
          <a href="#">Index</a>
        </li>
        <li>
          <a href="#">Upcoming</a>
        </li>
        <li>
          <a href="#">Classics</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
