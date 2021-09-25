const WatchlistMovieTemplate = ({ listedMovie }) => {
  return (
    <div className="watchlist-movie-wrapper">
      <div className="watchlist-info-slider">
        <h2 className="watchlist-movie">{listedMovie.title}</h2>
        <p>RATING: {listedMovie.vote_average}</p>
        <button className="remove-from-watchlist-btn">
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
