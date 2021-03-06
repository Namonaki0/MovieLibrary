import React, { useEffect, useState } from "react";
import { api_key } from "../apiKeys";
import UpcomingMoviesTemplate from "./UpcomingMoviesTemplate";
import CommentModal from "./CommentModal";
import commentsHandler from "../utils/commentsBodyHandler";
import Translate from "react-translate-component";
import {
  lightModeEnabled,
  lightModeDisabled,
} from "../settings/colorSchemeHandler";

export default function Upcoming() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [commentWindow, setCommentWindow] = useState(null);
  const [movieTitle, setMovieTitle] = useState("");
  const [user, setUsername] = useState("");
  const [comments, setComments] = useState("");
  const [commentMessage, setCommentMessage] = useState("");
  const [commentMessageDisplay, setCommentMessageDisplay] = useState(null);

  useEffect(() => {
    //? UPCOMING MOVIES FETCH ON LOAD -----------
    async function fetchMovieData() {
      const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1&include_adult=false`;

      try {
        const upcomingApiFetch = await fetch(url);
        const upcomingMovies = await upcomingApiFetch.json();
        setUpcomingMovies(upcomingMovies.results);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovieData();
    //? UPCOMING MOVIES FETCH ON LOAD -------- END

    //? LIGHTMODE LOCAL-STORAGE CHECKER
    if (localStorage.getItem("lightMode") === "enabled") {
      lightModeEnabled();
    } else {
      lightModeDisabled();
    }
    //? LIGHTMODE LOCAL-STORAGE CHECKER
  }, []);

  //? COMMENTS INPUT ------------
  const formSubmit = async (e) => {
    e.preventDefault();

    //? COMMENTS DATE AND TIME ON SUBMIT ---------------
    //? FIREBASE REALTIME DB ------------
    commentsHandler();
  };

  //? GRABS MOVIE TITLE ON CLICK FROM OFFSET-PARENT
  const movieTitleTarget = (e) => {
    setMovieTitle(
      e.target.parentElement.offsetParent.offsetParent.children[2].innerHTML
    );
  };

  return (
    <div className="upcoming-movies-body">
      <div className="title-wrapper">
        <Translate content="upcoming" component="h1" />
      </div>
      <div className="upcoming-movie-wrapper">
        {upcomingMovies.map(
          (upcomingMovie) =>
            upcomingMovie && (
              <UpcomingMoviesTemplate
                upcomingMovie={upcomingMovie}
                movieTitleTarget={(e) => movieTitleTarget(e)}
                setCommentWindow={setCommentWindow}
                key={upcomingMovie.id}
              />
            )
        )}
      </div>
      <CommentModal
        setComments={(e) => setComments(e)}
        setUsername={(e) => setUsername(e)}
        commentWindow={commentWindow}
        setCommentWindow={setCommentWindow}
        movieTitle={movieTitle}
        formSubmit={formSubmit}
        commentMessage={commentMessage}
        setCommentMessage={setCommentMessage}
        commentMessageDisplay={commentMessageDisplay}
        setCommentMessageDisplay={setCommentMessageDisplay}
      />
    </div>
  );
}
