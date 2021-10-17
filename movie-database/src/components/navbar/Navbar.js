import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import "./menu";
import { CgMenu } from "react-icons/cg";
import { AiOutlineHome, AiOutlineEye } from "react-icons/ai";
import { MdNewReleases, MdFavoriteBorder } from "react-icons/md";
import { HiOutlineLibrary, HiOutlineCog } from "react-icons/hi";
import { RiTv2Line } from "react-icons/ri";
import { GoCommentDiscussion } from "react-icons/go";

export default function Navbar() {
  let [commentNumber, setCommentNumber] = useState("");
  useEffect(async () => {
    const storedComments = JSON.parse(localStorage.comments);
    setCommentNumber(storedComments.length);
  });

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

        <Link to="/Comments" className="menu-link-path">
          <li className="menu-link comment-link">
            {/* {commentNumber > 0 ? ( */}
            <span className="comment-number-span">{commentNumber}</span>

            <GoCommentDiscussion className="icons" />
            <a href="#" className="link-text">
              Comments
            </a>
            <span className="open-menu-comment-number-span">
              {commentNumber}
            </span>
          </li>
        </Link>

        <Link to="/Watchlist" className="menu-link-path">
          <li className="menu-link">
            <RiTv2Line className="icons" />
            <a href="#" className="link-text">
              Watchlist
            </a>
          </li>
        </Link>

        <Link to="/Watched" className="menu-link-path">
          <li className="menu-link">
            <AiOutlineEye className="icons" />
            <a href="#" className="link-text">
              Watched
            </a>
          </li>
        </Link>

        <Link to="/Settings" className="menu-link-path">
          <li className="menu-link">
            <HiOutlineCog className="icons" />
            <a href="#" className="link-text">
              Settings
            </a>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
