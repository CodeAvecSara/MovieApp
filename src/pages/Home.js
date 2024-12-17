import React from "react";
import AvengersHero from '../components/ui/AvengersHero';
import MovieList from "../components/ui/MovieList";


const Home = () => {
  const API_KEY = "4d573f050fa0fd762b5ce8c196f2ca9e";
  return (
    /*<div style={{ backgroundColor: "#0E161D" }}>
      <AvengersHero />
      <MovieList />
      
    </div>*/
    <div style={{ backgroundColor: "#0E161D", paddingBottom: "20px" }}>
    {/* Section Hero */}
    <AvengersHero />

    {/* Section Popular Movies */}
    <MovieList
      fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`}
      title="Popular Movies"
    />

    
    </div>
  );
};



export default Home;


