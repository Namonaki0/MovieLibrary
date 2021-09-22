import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

//? INITIAL STATE
const initialState = {
  watchlist: [],
  watched: [],
};

//? CREATE CONTEXT
export const GlobalContext = createContext(initialState);

//? GLOBAL PROVIDER COMPONENTS
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //? ACTION
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", playload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
