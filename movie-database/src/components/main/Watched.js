import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import ClearWatchedModal from "./ClearWatchedModal";
import Translate from "react-translate-component";
import {
  lightModeEnabled,
  lightModeDisabled,
} from "../settings/colorSchemeHandler";

export default function Watched() {
  const [clearModal, setClearModal] = useState(null);
  const { watched } = useContext(GlobalContext);

  const clearWatchedLocalStorage = () => {
    localStorage.removeItem("watched");
    window.location.reload();
  };

  useEffect(() => {
    //? LIGHTMODE LOCAL-STORAGE CHECKER
    if (localStorage.getItem("lightMode") === "enabled") {
      lightModeEnabled();
    } else {
      lightModeDisabled();
    }
    //? LIGHTMODE LOCAL-STORAGE CHECKER
  }, []);

  return (
    <div className="watched-outter-wrapper">
      <Translate content="watched" component="h1" />
      {watched.length > 0 ? (
        <div className="watched-inner-wrapper">
          {watched.map((movie) => (
            <div className="watched-movie-wrapper">
              <h2 className="watched-movie">{movie.title}</h2>
              <img
                className="watched-movie-image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + "poster"}
              />
            </div>
          ))}
        </div>
      ) : (
        <h2 className="no-movies-in-watched">
          <Translate content="noMoviesinWatchedList" />
        </h2>
      )}

      <span className="watched-clear-span">
        <button onClick={() => setClearModal(!clearModal)}>
          <Translate content="clearAll" />
        </button>
      </span>
      <ClearWatchedModal
        clearModal={clearModal}
        setClearModal={setClearModal}
        clearWatchedLocalStorage={clearWatchedLocalStorage}
      />
    </div>
  );
}
