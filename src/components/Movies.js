import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((m) => (
    <div key={m.title}>
      <h2>{m.title}</h2>
      <p>Runtime: {m.time} min.</p>
      <ul>
       {m.genres.map((genre) => (
          <li key={genre} >{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
}

export default Movies;
