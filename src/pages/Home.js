import React from "react";
import AvengersHero from '../components/ui/AvengersHero';
import MovieList from "../components/ui/MovieList";


const Home = () => {
  return (
    <div style={{ backgroundColor: "#0E161D" }}>
      <AvengersHero />
      <MovieList />
      
    </div>
  );
};

export default Home;
