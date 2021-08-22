import React, { useState } from "react";
// import { useEffect, useState } from "react";

export default function Library() {
  const [query, setQuery] = useState("");

  const submitSearch = async (e) => {
    e.preventDefault();

    const api_key = `fef4f456a619d2054596d72fcd9a7171`;

    const url = `https://api.themoviedb.org/3/search/company?api_key=${api_key}&query=${query}&page=1`;

    const apiCall = await fetch(url);
    const movies = await apiCall.json();
    console.log(movies);
  };

  return (
    <form onSubmit={submitSearch} className="form">
      <input
        type="text"
        placeholder="search movie..."
        value={query}
        name="query"
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <button type="submit" classNAme="submit">
        Search
      </button>
    </form>
  );
}
