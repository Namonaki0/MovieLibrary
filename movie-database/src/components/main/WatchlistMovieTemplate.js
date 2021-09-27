import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";

const WatchlistMovieTemplate = ({ listedMovie }) => {
  const { removeMovieFromWatchlist } = useContext(GlobalContext);

  return (
    <div className="watchlist-movie-wrapper" deleteEffect>
      <div className="watchlist-info-slider">
        <h2 className="watchlist-movie">{listedMovie.title}</h2>
        <p>RATING: {listedMovie.vote_average}</p>
        <button
          className="remove-from-watchlist-btn"
          onClick={() => removeMovieFromWatchlist(listedMovie.id)}
        >
          remove from watchlist
        </button>
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
