import React from "react";
import { useEffect, useState } from "react";

export default function Library() {
  useEffect(() => {
    apiFetch();
    apiFetchImages();
  }, []);

  const [movies, setMovies] = useState([]);

  const api_key = `fef4f456a619d2054596d72fcd9a7171`;

  const apiFetch = async () => {
    const apiCall = await fetch(
      `https://api.themoviedb.org/3/search/company?api_key=${api_key}&query=titanic&page=1`
    );
    const movies = await apiCall.json();

    for (let i = 0; i <= movies.results.length; i++) {
      let movie_id = await movies.results[i].id;
      await apiFetchImages(movie_id);
      // console.log();
    }

    setMovies(movies.results);
  };

  const apiFetchImages = async (movie_id) => {
    const images = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=${api_key}&language=en-US&include_image_language=en,null`
    );

    const imagesData = await images.json();
    console.log(imagesData);
  };

  return (
    <div className="movie-template">
      {movies.map((movie) => (
        <h1 key={movie.id}>{movie.name}</h1>
      ))}
    </div>
  );
}
