import React from "react";
import { Link } from "react-router-dom";
import "./menu";
import { CgMenu } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { MdNewReleases } from "react-icons/md";
import { HiOutlineLibrary } from "react-icons/hi";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li className="burger-menu">
          <CgMenu className="burger-icon icons" />
          <a href="#" class="link-text"></a>
        </li>
        <Link to="/" className="menu-link-path">
          <li className="menu-link">
            <AiOutlineHome className="icons" />
            <a href="#" className="link-text">
              Home
            </a>
          </li>
        </Link>
        <Link to="/Upcoming" className="menu-link-path">
          <li className="menu-link">
            <MdNewReleases className="icons" />
            <a href="#" className="link-text">
              Upcoming
            </a>
          </li>
        </Link>

        <Link to="/library" className="menu-link-path">
          <li className="menu-link">
            <HiOutlineLibrary className="icons" />
            <a href="#" className="link-text">
              Library
            </a>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
