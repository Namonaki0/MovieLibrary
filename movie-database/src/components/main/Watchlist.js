import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import WatchlistMovieTemplate from "./WatchlistMovieTemplate";
import Translate from "react-translate-component";

export default function Watchlist() {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="watchlist-outter-wrapper">
      <Translate content="watchlist" component="h1" />
      {watchlist.length > 0 ? (
        <div className="watchlist-inner-wrapper">
          {watchlist.map((listedMovie) => (
            <WatchlistMovieTemplate listedMovie={listedMovie} />
          ))}
        </div>
      ) : (
        <Translate
          content="noMoviesinWatchList"
          component="h2"
          className="no-movies-in-watchlist"
        />
      )}
    </div>
  );
}
