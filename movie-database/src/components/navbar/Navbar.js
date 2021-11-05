import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./menu";
import { CgMenu } from "react-icons/cg";
import { AiOutlineHome, AiOutlineEye } from "react-icons/ai";
import { MdNewReleases } from "react-icons/md";
import { HiOutlineLibrary, HiOutlineCog } from "react-icons/hi";
import { RiTv2Line } from "react-icons/ri";
import { GoCommentDiscussion } from "react-icons/go";
import firebase from "firebase";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import languageHandler from "../utils/languageHandler";

export default function Navbar() {
  let [commentNumber, setCommentNumber] = useState();

  useEffect(() => {
    async function commentCount() {
      const commentRef = firebase.database().ref("Comments");

      commentRef.on("value", (comment) => {
        const allComments = comment.val();
        let commentsLength = Object.keys(allComments).length;
        setCommentNumber(commentsLength);
      });
    }
    commentCount();

    languageHandler();
  });

  return (
    <nav>
      <ul>
        <li className="burger-menu">
          <CgMenu className="burger-icon icons" />
          <a href="#" class="link-text" aria-label="burger-menu"></a>
        </li>
        <Link to="/" className="menu-link-path">
          <li className="menu-link">
            <AiOutlineHome className="icons" />
            <a href="#" className="link-text" aria-label="homepage">
              <Translate content="home" />
            </a>
          </li>
        </Link>
        <Link to="/Upcoming" className="menu-link-path">
          <li className="menu-link">
            <MdNewReleases className="icons" />
            <a href="#" className="link-text" aria-label="upcoming page">
              <Translate content="upcoming" />
            </a>
          </li>
        </Link>

        <Link to="/library" className="menu-link-path">
          <li className="menu-link">
            <HiOutlineLibrary className="icons" />
            <a href="#" className="link-text" aria-label="movie library">
              <Translate content="library" />
            </a>
          </li>
        </Link>

        <Link to="/Comments" className="menu-link-path">
          <li className="menu-link comment-link">
            <span className="comment-number-span">{commentNumber}</span>

            <GoCommentDiscussion className="icons" />
            <a href="#" className="link-text" aria-label="comments page">
              <Translate content="comments" />
            </a>
            <span className="open-menu-comment-number-span">
              {commentNumber}
            </span>
          </li>
        </Link>

        <Link to="/Watchlist" className="menu-link-path">
          <li className="menu-link">
            <RiTv2Line className="icons" />
            <a href="#" className="link-text" aria-label="movie watchlist page">
              <Translate content="watchlist" />
            </a>
          </li>
        </Link>

        <Link to="/Watched" className="menu-link-path">
          <li className="menu-link">
            <AiOutlineEye className="icons" />
            <a href="#" className="link-text" aria-label="watched movies page">
              <Translate content="watched" />
            </a>
          </li>
        </Link>

        <Link to="/Settings" className="menu-link-path">
          <li className="menu-link">
            <HiOutlineCog className="icons" />
            <a href="#" className="link-text" aria-label="settings page">
              <Translate content="settings" />
            </a>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
