import React, { useState } from "react";
import { api_key } from "../apiKey";
import MovieTemplate from "./MovieTemplate";
import CommentModal from "./CommentModal";
import firebase from "../utils/firebase";

export default function Library() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [user, setUsername] = useState("");
  const [comments, setComments] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [commentWindow, setCommentWindow] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

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

    //? DATE
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let time = date.getTime();
    //? TIME
    let hours = date.getHours();
    let mins = date.getMinutes();

    let dateOfComment = `${day}/${month}/${year}`;
    let timeOfComment = `${hours}:${mins}`;

    const movieTitle = document.querySelector(".comment-window-movie-title");
    const name = document.querySelector(".form .nameInput");
    const comment = document.querySelector(".form .commentInput");

    //? FIREBASE REALTIME DB ------------
    const commentRef = firebase.database().ref("Comments");

    const commentBody = {
      title: movieTitle.innerHTML,
      user: name.value,
      comment: comment.value,
      date: dateOfComment,
      time: timeOfComment,
    };

    commentRef.push(commentBody);
    //? END OF FIREBASE REALTIME DB ---------------

    name.value = "";
    comment.value = "";
  };

  //? GRABS MOVIE TITLE ON CLICK FROM OFFSET-PARENT
  let movieTitleTarget = (e) => {
    setMovieTitle(
      e.target.parentElement.offsetParent.offsetParent.children[2].innerHTML
    );
  };

  //? MOVIE TITLE SEARCH RENDER //
  return (
    <>
      <div className="library-outter-wrapper">
        <form onSubmit={submitSearch} className="form">
          <input
            type="text"
            placeholder="movie..."
            value={query}
            name="query"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="submit">
            Search
          </button>
        </form>

        <div className="outter-wrapper">
          {movies && movies.length > 0 ? (
            <div className="movie-template">
              {movies
                .filter((movie) => movie.poster_path)
                .map(
                  (movie) =>
                    movie && (
                      <MovieTemplate
                        movie={movie}
                        movieTitleTarget={(e) => movieTitleTarget(e)}
                        setCommentWindow={setCommentWindow}
                      />
                    )
                )}
              <CommentModal
                setComments={(e) => setComments(e)}
                setUsername={(e) => setUsername(e)}
                commentWindow={commentWindow}
                setCommentWindow={setCommentWindow}
                movieTitle={movieTitle}
                formSubmit={formSubmit}
              />
            </div>
          ) : (
            <div class="no-movies-message">
              <p>search for movie...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
