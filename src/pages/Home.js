import React from "react";
import AvengersHero from '../components/ui/AvengersHero';
import MovieList from "../components/ui/MovieList";
import Footer from "../components/layout/footer/footer";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#0E161D" }}>
      <AvengersHero />
      <MovieList />
      
    </div>
  );
};

export default Home;
