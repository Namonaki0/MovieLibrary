import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { IoAddCircleOutline } from "react-icons/io5";
import { VscComment } from "react-icons/vsc";
import ReactTooltip from "react-tooltip";

export const UpcomingMoviesTemplate = ({
  upcomingMovie,
  movieTitleTarget,
  setCommentWindow,
}) => {
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);

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
            data-tip="add to watchlist"
          />
          <ReactTooltip offset={{ bottom: 30, left: 70 }} effect="float" />
        </a>

        <a>
          <VscComment
            className="sidebar-icons"
            onClick={(e) => {
              setCommentWindow("grid");
              movieTitleTarget(e);
            }}
            data-tip="comment"
          />
          <ReactTooltip offset={{ bottom: 30, left: 70 }} />
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
