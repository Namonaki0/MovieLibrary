import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import WatchlistMovieTemplate from "./WatchlistMovieTemplate";
import Translate from "react-translate-component";
import {
  lightModeEnabled,
  lightModeDisabled,
} from "../settings/colorSchemeHandler";

export default function Watchlist() {
  //? GLOBAL CONTEXT
  const { watchlist } = useContext(GlobalContext);

  useEffect(() => {
    //? LIGHTMODE LOCAL-STORAGE CHECKER ---
    if (localStorage.getItem("lightMode") === "enabled") {
      lightModeEnabled();
    } else {
      lightModeDisabled();
    }
    //? LIGHTMODE LOCAL-STORAGE CHECKER -- END
  });

  return (
    <div className="watchlist-outter-wrapper">
      <div className="title-wrapper">
        <Translate content="watchlist" component="h1" />
      </div>
      {watchlist.length > 0 ? (
        <div className="watchlist-inner-wrapper">
          {watchlist.map((listedMovie) => (
            <WatchlistMovieTemplate
              listedMovie={listedMovie}
              key={listedMovie.id}
            />
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
