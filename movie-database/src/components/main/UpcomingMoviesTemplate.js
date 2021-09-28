import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { IoAddCircleOutline } from "react-icons/io5";
import { VscComment } from "react-icons/vsc";
import { AiOutlineEye } from "react-icons/ai";

export const UpcomingMoviesTemplate = ({
  upcomingMovie,
  movieTitleTarget,
  setCommentWindow,
}) => {
  const { addMovieToWatchlist, watchlist, addMovieToWatched } =
    useContext(GlobalContext);

  let movieInWatchlist = watchlist.find(
    (movie) => movie.id === upcomingMovie.id
  );

  const iconDisabled = {
    pointerEvents: "none",
    cursor: "none",
    color: "darkGrey",
    transition: "all 300ms ease",
  };

  const watchlistMovieBtnDisabled = movieInWatchlist ? iconDisabled : "";

  return (
    <div className="upcoming-movie-container">
      <span className="sidebar-icons-wrapper">
        <a>
          <IoAddCircleOutline
            className="sidebar-icons add-movie"
            style={watchlistMovieBtnDisabled}
            onClick={() => addMovieToWatchlist(upcomingMovie)}
          />
        </a>
        <a>
          <AiOutlineEye
            className="sidebar-icons"
            onClick={() => addMovieToWatched(upcomingMovie)}
          />
        </a>
        <a>
          <VscComment
            className="sidebar-icons"
            onClick={(e) => {
              setCommentWindow("grid");
              movieTitleTarget(e);
            }}
          />
        </a>
      </span>
      <img
        className="upcoming-movie-image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${upcomingMovie.poster_path}`}
        alt={upcomingMovie.title + "poster"}
      />
      <h2>{upcomingMovie.title}</h2>
    </div>
  );
};

export default UpcomingMoviesTemplate;
