import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { IoAddCircleOutline } from "react-icons/io5";
import { VscComment } from "react-icons/vsc";

export const UpcomingMoviesTemplate = ({
  upcomingMovie,
  movieTitleTarget,
  setCommentWindow,
}) => {
  const { addMovieToWatchlist } = useContext(GlobalContext);
  return (
    <div className="upcoming-movie-container">
      <span className="sidebar-icons-wrapper">
        <a>
          <IoAddCircleOutline
            className="sidebar-icons add-movie"
            onClick={() => addMovieToWatchlist(upcomingMovie)}
          />
        </a>
        <a
          onClick={(e) => {
            setCommentWindow("grid");
            movieTitleTarget(e);
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
  );
};

export default UpcomingMoviesTemplate;
