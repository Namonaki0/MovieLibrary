import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { IoAddCircleOutline } from "react-icons/io5";
import { VscComment } from "react-icons/vsc";

const MovieTemplate = ({ movie, movieTitleTarget, setCommentWindow }) => {
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);

  let movieInWatchlist = watchlist.find((movie) => movie.id === movie.id);

  const iconDisabled = {
    pointerEvents: "none",
    cursor: "none",
    color: "darkGrey",
    transition: "all 300ms ease",
  };

  const watchlistMovieBtnDisabled = movieInWatchlist ? iconDisabled : "";

  return (
    <div className="movie-container" key={movie.id}>
      <span className="sidebar-icons-wrapper">
        <a>
          <IoAddCircleOutline
            className="sidebar-icons add-movie"
            style={watchlistMovieBtnDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          />
        </a>
        <a
          onClick={(e) => {
            setCommentWindow("grid");
            movieTitleTarget(e);
          }}
        >
          <VscComment
            className="sidebar-icons"
            // onClick={(e) => console.dir(e.target)}
          />
        </a>
      </span>
      <img
        className="movie-image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + "poster"}
      />
      <h1>{movie.title}</h1>
      <div className="movie-overview">{movie.overview}</div>
      <div className="movie-release-date">
        Released:{" "}
        {movie.release_date ? movie.release_date.substring(0, 4) : "N/A"}
      </div>
      <div className="movie-rating">Rating: {movie.vote_average}</div>
    </div>
  );
};
export default MovieTemplate;
