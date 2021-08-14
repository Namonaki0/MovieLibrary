import React from "react";
import "./menu";
import { CgMenu } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { MdNewReleases } from "react-icons/md";
import { HiOutlineLibrary } from "react-icons/hi";

function Navbar() {
  return (
    <nav>
      <ul>
        <li class="menu-link">
          <CgMenu class="menu-icon icons" />
          <a href="#" class="link-text"></a>
        </li>
        <li class="menu-link">
          <AiOutlineHome class="icons" />
          <a href="#" class="link-text">
            Index
          </a>
        </li>
        <li class="menu-link">
          <MdNewReleases class="icons" />
          <a href="#" class="link-text">
            Upcoming
          </a>
        </li>
        <li class="menu-link">
          <HiOutlineLibrary class="icons" />
          <a href="#" class="link-text">
            Library
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
