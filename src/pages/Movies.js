import React from "react";
import MovieList from "../components/ui/MovieList";

const Movies = () => {
  const API_KEY = "4d573f050fa0fd762b5ce8c196f2ca9e";
  const fetchUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  return <MovieList fetchUrl={fetchUrl} title="Popular Movies" />;
};

export default Movies;
