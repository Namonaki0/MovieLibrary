import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./menu";
import { CgMenu } from "react-icons/cg";
import { AiOutlineHome, AiOutlineEye } from "react-icons/ai";
import { MdNewReleases, MdFavoriteBorder } from "react-icons/md";
import { HiOutlineLibrary, HiOutlineCog } from "react-icons/hi";
import { RiTv2Line } from "react-icons/ri";
import { GoCommentDiscussion } from "react-icons/go";
import firebase from "firebase";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import en from "../../languages/en";
import es from "../../languages/es";
import jp from "../../languages/jp";

export default function Navbar() {
  let [commentNumber, setCommentNumber] = useState();

  useEffect(async () => {
    const commentRef = firebase.database().ref("Comments");

    commentRef.on("value", (comment) => {
      const allComments = comment.val();
      let commentsLength = Object.keys(allComments).length;
      setCommentNumber(commentsLength);
    });
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
              <Translate content="home" />
              {/* Home */}
            </a>
          </li>
        </Link>
        <Link to="/Upcoming" className="menu-link-path">
          <li className="menu-link">
            <MdNewReleases className="icons" />
            <a href="#" className="link-text">
              <Translate content="upcoming" />
              {/* Upcoming */}
            </a>
          </li>
        </Link>

        <Link to="/library" className="menu-link-path">
          <li className="menu-link">
            <HiOutlineLibrary className="icons" />
            <a href="#" className="link-text">
              <Translate content="library" />
              {/* Library */}
            </a>
          </li>
        </Link>

        <Link to="/Comments" className="menu-link-path">
          <li className="menu-link comment-link">
            <span className="comment-number-span">{commentNumber}</span>

            <GoCommentDiscussion className="icons" />
            <a href="#" className="link-text">
              <Translate content="comments" />
              {/* Comments */}
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
              <Translate content="watchlist" />
              {/* Watchlist */}
            </a>
          </li>
        </Link>

        <Link to="/Watched" className="menu-link-path">
          <li className="menu-link">
            <AiOutlineEye className="icons" />
            <a href="#" className="link-text">
              <Translate content="watched" />
              {/* Watched */}
            </a>
          </li>
        </Link>

        <Link to="/Settings" className="menu-link-path">
          <li className="menu-link">
            <HiOutlineCog className="icons" />
            <a href="#" className="link-text">
              <Translate content="settings" />
              {/* Settings */}
            </a>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
