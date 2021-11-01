import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import WatchlistMovieTemplate from "./WatchlistMovieTemplate";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import en from "../../languages/en";
import es from "../../languages/es";
import jp from "../../languages/jp";

//? LANGUAGE HANDLER ------------------
counterpart.registerTranslations("en", en);
counterpart.setLocale("en", en);
//? LANGUAGE HANDLER ------------------

export default function Watchlist() {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="watchlist-outter-wrapper">
      <Translate content="watchlist" component="h1" />
      {/* <h1>Watchlist</h1> */}
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
