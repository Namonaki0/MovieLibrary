import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const WatchlistMovieTemplate = ({ listedMovie }) => {
  const { removeMovieFromWatchlist, addMovieToWatched } =
    useContext(GlobalContext);

  return (
    <div className="watchlist-movie-wrapper">
      <div className="watchlist-info-slider">
        <h2 className="watchlist-movie">{listedMovie.title}</h2>
        <p>RATING: {listedMovie.vote_average}</p>
        <div className="btn-wrapper">
          <button
            className="add-to-watched-btn"
            onClick={() => addMovieToWatched(listedMovie)}
          >
            <AiOutlineCheck />
            watched
          </button>
          <button
            className="remove-from-watchlist-btn"
            onClick={() => removeMovieFromWatchlist(listedMovie.id)}
          >
            <AiOutlineClose />
            remove from watchlist
          </button>
        </div>
      </div>
      <img
        className="watchlist-movie-image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${listedMovie.poster_path}`}
        alt={listedMovie.title + "poster"}
      />
    </div>
  );
};

export default WatchlistMovieTemplate;
