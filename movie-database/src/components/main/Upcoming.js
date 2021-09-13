import React, { useEffect, useState } from "react";
import { api_key } from "../apiKey";
import { IoAddCircleOutline } from "react-icons/io5";
import { VscComment } from "react-icons/vsc";

export default function Upcoming() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`;

    try {
      const upcomingApiFetch = await fetch(url);
      const upcomingMovies = await upcomingApiFetch.json();
      setUpcomingMovies(upcomingMovies.results);
    } catch (err) {
      console.error(err);
    }
  });

  return (
    <div className="upcoming-movies-body">
      <h1>Upcoming</h1>
      <div className="upcoming-movie-wrapper">
        {upcomingMovies.map((upcomingMovie) => (
          <div className="upcoming-movie-container">
            <span className="sidebar-icons-wrapper">
              <a>
                <IoAddCircleOutline className="sidebar-icons" />
              </a>
              <a>
                <VscComment className="sidebar-icons" />
              </a>
            </span>
            <img
              className="upcoming-movie-image"
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${upcomingMovie.poster_path}`}
              alt={upcomingMovie.title + "poster"}
            />
            <h2>{upcomingMovie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
