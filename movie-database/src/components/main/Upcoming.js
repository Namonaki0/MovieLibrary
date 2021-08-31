import React, { useEffect, useState } from "react";
import { api_key } from "../apiKey";

export default function Upcoming() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`;

    try {
      const upcomingApiFetch = await fetch(url);
      const upcomingMovies = await upcomingApiFetch.json();
      // setUpcomingMovies(upcomingMovies.results);
      // console.log(upcomingMovies.results);
    } catch (err) {
      console.error(err);
    }
  });

  return (
    <div>
      <h1>Upcoming Movies</h1>
      <div className="upcoming-movie-wrapper">
        {upcomingMovies.map((upcomingMovie) => (
          <h2>{upcomingMovie.original_title}</h2>
        ))}
      </div>
    </div>
  );
}
