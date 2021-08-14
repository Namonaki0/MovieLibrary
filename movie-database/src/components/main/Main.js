import React from "react";
import { useEffect, useState } from "react";

export default function Main() {
  useEffect(() => {
    apiFetch();
  }, []);

  const [movies, setMovies] = useState([]);

  const apiFetch = async () => {
    const apiCall = await fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=fef4f456a619d2054596d72fcd9a7171"
    );
    const movies = await apiCall.json();
    setMovies(movies);
    console.log(movies);
  };
  return (
    <main>
      <h1>{movies.title}</h1>
    </main>
  );
}
