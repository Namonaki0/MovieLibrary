import React, { useEffect, useState } from "react";
import { api_key } from "../apiKey";
import UpcomingMoviesTemplate from "./UpcomingMoviesTemplate";
import CommentModal from "./CommentModal";
import CommentMessageModal from "./CommentMessageModal";
import firebase from "../utils/firebase";

export default function Upcoming() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [commentWindow, setCommentWindow] = useState(null);
  const [movieTitle, setMovieTitle] = useState("");
  const [user, setUsername] = useState("");
  const [comments, setComments] = useState("");
  const [commentMessage, setCommentMessage] = useState("");

  useEffect(async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1&include_adult=false`;

    try {
      const upcomingApiFetch = await fetch(url);
      const upcomingMovies = await upcomingApiFetch.json();
      setUpcomingMovies(upcomingMovies.results);
    } catch (err) {
      console.error(err);
    }
  }, []);

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

    let dateOfComment = `${day}/${month + 1}/${year}`;
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

  return (
    <div className="upcoming-movies-body">
      <h1>Upcoming</h1>
      <div className="upcoming-movie-wrapper">
        {upcomingMovies.map(
          (upcomingMovie) =>
            upcomingMovie && (
              <UpcomingMoviesTemplate
                upcomingMovie={upcomingMovie}
                movieTitleTarget={(e) => movieTitleTarget(e)}
                setCommentWindow={setCommentWindow}
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
      />
      {/* <CommentMessageModal
        commentMessage={commentMessage}
        setCommentMessage={setCommentMessage}
      /> */}
    </div>
  );
}
