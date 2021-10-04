import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import WatchlistMovieTemplate from "./WatchlistMovieTemplate";

export default function Watchlist() {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="watchlist-outter-wrapper">
      <h1>Watchlist</h1>
      {watchlist.length > 0 ? (
        <div className="watchlist-inner-wrapper">
          {watchlist.map((listedMovie) => (
            <WatchlistMovieTemplate listedMovie={listedMovie} />
          ))}
        </div>
      ) : (
        <h2 className="no-movies-in-watchlist">
          There are currently no movies in your watchlist
        </h2>
      )}
    </div>
  );
}
