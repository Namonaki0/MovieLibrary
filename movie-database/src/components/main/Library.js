import React from "react";
import { useEffect, useState } from "react";

export default function Library() {
  useEffect(() => {
    apiFetch();
  }, []);

  const [movies, setMovies] = useState([]);

  const apiFetch = async () => {
    const apiCall = await fetch(
      "https://api.themoviedb.org/3/search/company?api_key=fef4f456a619d2054596d72fcd9a7171&query=zeitgeist&page=1"
    );
    const movies = await apiCall.json();
    setMovies(movies.results);
  };
  movies.map((movie) => {
    console.log(movie);
  });

  return (
    <div className="movie-template">
      {movies.map((movie) => (
        <h1 key={movie.id}>{movie.name}</h1>
      ))}
    </div>
  );
}
