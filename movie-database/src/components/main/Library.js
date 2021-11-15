import React, { useState, useEffect } from "react";
import { api_key } from "../apiKey";
import MovieTemplate from "./MovieTemplate";
import CommentModal from "./CommentModal";
import MovieModal from "./MovieModal";
import commentsHandler from "../utils/commentsBodyHandler";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import {
  lightModeEnabled,
  lightModeDisabled,
} from "../settings/colorSchemeHandler";

export default function Library() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [user, setUsername] = useState("");
  const [comments, setComments] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [commentWindow, setCommentWindow] = useState(null);
  const [commentMessage, setCommentMessage] = useState("");
  const [commentMessageDisplay, setCommentMessageDisplay] = useState(null);
  const [movieModalInfo, setMovieModalInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [modalOverview, setModalOverview] = useState("");
  const [modalReleaseDate, setModalReleaseDate] = useState("");
  let [placeHolder, setPlaceHolder] = useState("movie");

  //? MOVIE TITLE SEARCH - API FETCH //
  const submitSearch = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const apiCall = await fetch(url);
      const movies = await apiCall.json();
      setMovies(movies.results);
    } catch (err) {
      setErrorMessage(err);
      console.log(setErrorMessage);
    }
  };

  //? COMMENTS INPUT ------------
  const formSubmit = async (e) => {
    e.preventDefault();

    //? COMMENTS DATE AND TIME ON SUBMIT ---------------
    //? FIREBASE REALTIME DB ------------
    commentsHandler();
  };

  //? GRABS MOVIE TITLE ON CLICK FROM OFFSET-PARENT
  let movieTitleTarget = (e) => {
    setMovieTitle(
      e.target.parentElement.offsetParent.offsetParent.children[2].innerHTML
    );
  };

  //? MOVIE INFO MODAL - TITLE, IMAGE, DESCRIPTION
  let modalImageTarget = (e) => {
    setModalImage(e.target.offsetParent.childNodes[1].currentSrc);
    setModalTitle(e.target.offsetParent.childNodes[2].innerHTML);
    setModalOverview(e.target.offsetParent.childNodes[3].innerHTML);
    setModalReleaseDate(e.target.offsetParent.childNodes[4].innerHTML);
  };

  //? //////////////////////////////////////////////

  useEffect(() => {
    const placeholder = counterpart.translate("movie");
    setPlaceHolder(placeholder);

    //? LIGHTMODE LOCAL-STORAGE CHECKER
    if (localStorage.getItem("lightMode") === "enabled") {
      lightModeEnabled();
    } else {
      lightModeDisabled();
    }
    //? LIGHTMODE LOCAL-STORAGE CHECKER
  }, []);

  //? MOVIE TITLE SEARCH RENDER //
  return (
    <>
      <div className="library-outter-wrapper">
        <form onSubmit={submitSearch} className="form">
          <div className="inner-form-wrapper">
            <input
              type="text"
              value={query}
              name="query"
              className="movie-search-input"
              placeholder={`${placeHolder}...`}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="submit">
              <Translate content="search" />
            </button>
          </div>
        </form>

        <div className="outter-wrapper">
          {movies && movies.length > 0 ? (
            <div className="movie-template">
              {movies
                .filter((movie) => movie.poster_path)
                .map(
                  (movie) =>
                    movie && (
                      <>
                        <MovieTemplate
                          movie={movie}
                          movieTitleTarget={(e) => movieTitleTarget(e)}
                          setCommentWindow={setCommentWindow}
                          movieModalInfo={movieModalInfo}
                          setMovieModalInfo={setMovieModalInfo}
                          modalImageTarget={modalImageTarget}
                          key={movie.id}
                        />
                        <MovieModal
                          movie={movie}
                          movieModalInfo={movieModalInfo}
                          setMovieModalInfo={setMovieModalInfo}
                          setCommentWindow={setCommentWindow}
                          modalImage={modalImage}
                          modalTitle={modalTitle}
                          modalOverview={modalOverview}
                          modalReleaseDate={modalReleaseDate}
                        />
                      </>
                    )
                )}

              <CommentModal
                setComments={(e) => setComments(e)}
                setUsername={(e) => setUsername(e)}
                commentWindow={commentWindow}
                setCommentWindow={setCommentWindow}
                commentMessage={commentMessage}
                setCommentMessage={setCommentMessage}
                commentMessageDisplay={commentMessageDisplay}
                setCommentMessageDisplay={setCommentMessageDisplay}
                movieTitle={movieTitle}
                formSubmit={formSubmit}
              />
            </div>
          ) : (
            <div class="no-movies-message">
              <Translate content="searchMovie" component="p" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
