import React, { useEffect, useState, createContext, useContext } from "react";
import { api_key } from "../apiKey";
import { IoAddCircleOutline } from "react-icons/io5";
import { VscComment } from "react-icons/vsc";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Upcoming() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [commentWindow, setCommentWindow] = useState(null);
  const [movieTitle, setMovieTitle] = useState("title");
  const [user, setUsername] = useState("");
  const [comments, setComments] = useState("");

  useEffect(async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`;

    try {
      const upcomingApiFetch = await fetch(url);
      const upcomingMovies = await upcomingApiFetch.json();
      setUpcomingMovies(upcomingMovies.results);
    } catch (err) {
      console.error(err);
    }
  }, []);

  //? JSON-SERVER COMMENTS INPUT ------------
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

    const commentBody = {
      title: movieTitle.innerHTML,
      user: name.value,
      comment: comment.value,
      date: dateOfComment,
      time: timeOfComment,
    };

    const commentFetch = await fetch("http://localhost:3000/comments", {
      method: "POST",
      body: JSON.stringify(commentBody),
      headers: { "Content-type": "application/json" },
    });

    name.value = "";
    comment.value = "";
  };
  //? END OF JSON-SERVER COMMENTS INPUT -----------

  return (
    <div className="upcoming-movies-body">
      <h1>Upcoming</h1>
      <div className="upcoming-movie-wrapper">
        {upcomingMovies.map((upcomingMovie) => (
          <div className="upcoming-movie-container">
            <span className="sidebar-icons-wrapper">
              <a>
                <IoAddCircleOutline className="sidebar-icons" />
              </a>
              <a
                onClick={(e) => {
                  setCommentWindow("grid");
                  setMovieTitle(
                    e.target.offsetParent.offsetParent.children[2].innerHTML
                  );
                }}
              >
                <VscComment className="sidebar-icons" />
              </a>
            </span>
            <img
              className="upcoming-movie-image"
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${upcomingMovie.poster_path}`}
              alt={upcomingMovie.title + "poster"}
            />
            <h2>{upcomingMovie.title}</h2>
          </div>
        ))}
      </div>
      <div
        className="comment-window-wrapper"
        style={{
          display: commentWindow ? "grid" : "none",
        }}
      >
        <form onSubmit={formSubmit} className="form">
          <AiOutlineCloseCircle
            className="comment-window-close-icon"
            onClick={() => setCommentWindow(!commentWindow)}
          />

          <span className="comment-window-movie-title">{movieTitle}</span>
          <label for="comment">comment</label>
          <input
            type="text"
            name="comment"
            className="nameInput"
            placeholder="name..."
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            name="comment"
            className="commentInput"
            placeholder="comment..."
            autoComplete="off"
            onChange={(e) => setComments(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
