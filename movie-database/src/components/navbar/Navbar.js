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
  //? MENU TOGGLE ------------
  let [isActive, setIsActive] = useState(false);
  //? MENU TOGGLE ------------

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
    <nav className="nav" style={{ width: isActive === true ? "16rem" : null }}>
      <ul style={{ width: isActive === true ? "16rem" : null }}>
        <li className="burger-menu" onClick={() => setIsActive(!isActive)}>
          <CgMenu className="burger-icon icons" />
          <a href="#" class="link-text" aria-label="burger-menu"></a>
        </li>
        <Link to="/" className="menu-link-path">
          <li className="menu-link" onClick={() => setIsActive(null)}>
            <AiOutlineHome className="icons" />
            <a
              href="#"
              className="link-text"
              aria-label="homepage"
              style={{
                display: isActive === true ? "flex" : null,
                opacity: "1",
              }}
            >
              <Translate content="home" />
            </a>
          </li>
        </Link>
        <Link to="/Upcoming" className="menu-link-path">
          <li className="menu-link" onClick={() => setIsActive(null)}>
            <MdNewReleases className="icons" />
            <a
              href="#"
              className="link-text"
              aria-label="upcoming page"
              style={{
                display: isActive === true ? "flex" : null,
                opacity: "1",
              }}
            >
              <Translate content="upcoming" />
            </a>
          </li>
        </Link>

        <Link to="/library" className="menu-link-path">
          <li className="menu-link" onClick={() => setIsActive(null)}>
            <HiOutlineLibrary className="icons" />
            <a
              href="#"
              className="link-text"
              aria-label="movie library"
              style={{
                display: isActive === true ? "flex" : null,
                opacity: "1",
              }}
            >
              <Translate content="library" />
            </a>
          </li>
        </Link>

        <Link to="/Comments" className="menu-link-path">
          <li
            className="menu-link comment-link"
            onClick={() => setIsActive(null)}
          >
            <span className="comment-number-span">{commentNumber}</span>

            <GoCommentDiscussion className="icons" />
            <a
              href="#"
              className="link-text"
              aria-label="comments page"
              style={{
                display: isActive === true ? "flex" : null,
                opacity: "1",
              }}
            >
              <Translate content="comments" />
            </a>
            <span className="open-menu-comment-number-span">
              {commentNumber}
            </span>
          </li>
        </Link>

        <Link to="/Watchlist" className="menu-link-path">
          <li className="menu-link" onClick={() => setIsActive(null)}>
            <RiTv2Line className="icons" />
            <a
              href="#"
              className="link-text"
              aria-label="movie watchlist page"
              style={{
                display: isActive === true ? "flex" : null,
                opacity: "1",
              }}
            >
              <Translate content="watchlist" />
            </a>
          </li>
        </Link>

        <Link to="/Watched" className="menu-link-path">
          <li className="menu-link" onClick={() => setIsActive(null)}>
            <AiOutlineEye className="icons" />
            <a
              href="#"
              className="link-text"
              aria-label="watched movies page"
              style={{
                display: isActive === true ? "flex" : null,
                opacity: "1",
              }}
            >
              <Translate content="watched" />
            </a>
          </li>
        </Link>

        <Link to="/Settings" className="menu-link-path">
          <li className="menu-link" onClick={() => setIsActive(null)}>
            <HiOutlineCog className="icons" />
            <a
              href="#"
              className="link-text"
              aria-label="settings page"
              style={{
                display: isActive === true ? "flex" : null,
                opacity: "1",
              }}
            >
              <Translate content="settings" />
            </a>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
