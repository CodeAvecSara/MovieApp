import React from "react";
import MovieList from "../components/ui/MovieList";

const Series = () => {
  const API_KEY = "4d573f050fa0fd762b5ce8c196f2ca9e";
  const fetchUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;

  return <MovieList fetchUrl={fetchUrl} title="Popular Series" />;
};

export default Series;
