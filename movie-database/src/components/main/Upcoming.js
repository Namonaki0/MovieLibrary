import React, { useEffect, useState } from "react";
import { api_key } from "../apiKey";
import { IoAddCircleOutline } from "react-icons/io5";
import { VscComment } from "react-icons/vsc";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Upcoming() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [commentWindow, setCommentWindow] = useState(null);
  const [movieTitle, setMovieTitle] = useState("");
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

  const onClickMovieTitle = (e) => {
    const movieTitle = e.target.parentElement.childNodes[2].innerHTML;
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    const comment = document.querySelector(".form .commentInput");

    const commentBody = {
      comment: comment.value,
    };

    const commentFetch = await fetch("http://localhost:3000/comments", {
      method: "POST",
      body: JSON.stringify(commentBody),
      headers: { "Content-type": "application/json" },
    });

    comment.value = "";
  };

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
              <a onClick={() => setCommentWindow("grid")}>
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

          {/* <p className="comment-window-movie-title">{movieTitle}</p> */}
          <label for="comment">comment</label>
          <input
            type="text"
            name="comment"
            className="commentInput"
            placeholder="enter comment..."
            autoComplete="off"
            onChange={(e) => setComments(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
