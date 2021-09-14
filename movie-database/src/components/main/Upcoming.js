import React, { useEffect, useState } from "react";
import { api_key } from "../apiKey";
// import CommentWindow from "./CommentWindow";
import { IoAddCircleOutline } from "react-icons/io5";
import { VscComment } from "react-icons/vsc";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Upcoming() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [commentWindow, setCommentWindow] = useState(null);
  const [movieTitle, setMovieTitle] = useState("");
  // const [movieTitle, setMovieTitle] = useState();

  useEffect(async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`;

    try {
      const upcomingApiFetch = await fetch(url);
      const upcomingMovies = await upcomingApiFetch.json();
      setUpcomingMovies(upcomingMovies.results);
    } catch (err) {
      console.error(err);
    }
  });

  const onClickMovieTitle = (e) => {
    const movieTitle = e.target.parentElement.childNodes[2].innerHTML;
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
        <form>
          <AiOutlineCloseCircle
            className="comment-window-close-icon"
            onClick={() => setCommentWindow(!commentWindow)}
          />

          {/* <p className="comment-window-movie-title">{movieTitle}</p> */}
          <label for="comment">comment</label>
          <input
            type="text"
            name="comment"
            id="comment"
            placeholder="enter comment..."
            autoComplete="off"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
