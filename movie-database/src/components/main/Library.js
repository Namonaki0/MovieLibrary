import React, { useState, useEffect } from "react";
import { api_key } from "../apiKey";
import MovieTemplate from "./MovieTemplate";
import CommentModal from "./CommentModal";
import firebase from "../utils/firebase";

export default function Library() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState("title");
  const [commentWindow, setCommentWindow] = useState(null);
  const [comments, setComments] = useState("");
  const [user, setUsername] = useState("");

  //? MODAL CREATION ---------------
  useEffect(() => {
    const movieContainers = document.querySelectorAll(".movie-container");
    const movieTemplate = document.querySelector(".movie-template");
    const modalCloseBtnInnerText = `<i class="fas fa-times-circle"></i>`;

    const modalDiv = document.createElement("div");

    movieContainers.forEach((movieContainer) => {
      movieContainer.addEventListener("click", (e) => {
        console.log(e.target.children);
        let movieImage = e.target.children[1].currentSrc;
        let movieTitle = e.target.children[2].innerText;
        let movieOverview = e.target.children[3].innerText;
        let movieReleaseDate = e.target.children[4].innerText;
        let movieRating = e.target.children[5].innerText;

        modalDiv.style.display = "flex";
        modalDiv.classList.add("modal-movie-wrapper");
        modalDiv.innerHTML = `
            <span>${modalCloseBtnInnerText}</span>
            <div class="modal-movie-inner-wrapper">
              <div class="modal-movie-image-wrapper">
               <img class="modal-movie-image" src=${movieImage} />
              </div>
              <div class="modal-movie-main-info">
                <div class="modal-movie-title">${movieTitle}</div>
                <div class="modal-movie-overview">${movieOverview}</div>
                <div class="modal-movie-secondary-info">
                  <div class="modal-movie-release-date">${movieReleaseDate}</div>
                  <div class="modal-movie-rating">${movieRating}</div>
                </div>
              </div>
            </div>
          `;

        movieTemplate.appendChild(modalDiv);

        //? CLOSE MODAL WITH X MARK //
        window.addEventListener("click", (e) => {
          if (e.target.classList.contains("fa-times-circle")) {
            modalDiv.style.display = "none";
          }
        });
      });
    });
    //? CLOSE MODAL BY CHOOSING ANOTHER MOVIE //
    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-movie-wrapper")) {
        modalDiv.style.display = "none";
      }
    });
  });
  //? END OF MODAL CREATION ---------------

  //? MOVIE TITLE SEARCH - API FETCH //
  const submitSearch = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const apiCall = await fetch(url);
      const movies = await apiCall.json();
      setMovies(movies.results);
    } catch (err) {
      console.error("nothing found", err);
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
  const movieTitleTarget = (e) => {
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
          ></input>
          <button type="submit" className="submit">
            Search
          </button>
        </form>

        <div className="outter-wrapper">
          {movies.length > 0 ? (
            <div className="movie-template">
              {movies
                .filter((movie) => movie.poster_path)
                .map((movie) => movie && <MovieTemplate movie={movie} />)}
            </div>
          ) : (
            <div class="no-movies-message">
              <p>movie search...</p>
            </div>
          )}
        </div>
      </div>
      <CommentModal
        setComments={(e) => setComments(e)}
        setUsername={(e) => setUsername(e)}
        commentWindow={commentWindow}
        setCommentWindow={setCommentWindow}
        movieTitle={movieTitle}
        formSubmit={formSubmit}
      />
    </>
  );
}
