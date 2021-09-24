const WatchlistMovieTemplate = ({ listedMovie }) => {
  return (
    <div className="watchlist-movie-wrapper">
      <div>
        <h2 className="watchlist-movie">{listedMovie.title}</h2>
        <img
          className="watchlist-movie-image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${listedMovie.poster_path}`}
          alt={listedMovie.title + "poster"}
        />
      </div>
    </div>
  );
};

export default WatchlistMovieTemplate;
