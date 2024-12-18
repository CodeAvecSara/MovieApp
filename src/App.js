import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import MovieDetail from './components/ui/MovieDetail';
import Header from './components/layout/header/header';
import Footer from "./components/layout/footer/footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from './pages/SignUp'; // Assurez-vous que le chemin est correct
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Subscribe from "./pages/Subscribe"
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/subscribe" element={<Subscribe />} />

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

