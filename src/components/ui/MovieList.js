import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tmdb from '../services/api';
import './MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);  // Ajout de l'état de chargement
  const navigate = useNavigate(); // Hook pour la navigation

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await tmdb.get('/movie/popular');
        setMovies(response.data.results);
        setLoading(false);  // Une fois les films chargés, on met à jour l'état de chargement
      } catch (error) {
        console.error('Erreur lors de la récupération des films :', error);
        setLoading(false);  // En cas d'erreur aussi, on arrête le chargement
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-container">
      <h1 className="movie-header">Trending</h1>
      {loading ? (
        <p>Loading...</p>  // Message de chargement
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => navigate(`/movie/${movie.id}`)} // Navigue vers la page de détail
            >
              <div className="movie-image-container">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
                <span className="movie-badge">HD</span>
              </div>
              <div className="movie-details">
                <h3 className="movie-title1" >{movie.title}</h3>
                <div className="movie-meta">
                  <span className="movie-year">{new Date(movie.release_date).getFullYear()}</span>
                  <span className="movie-type">Movie</span>
                  <span className="movie-duration">{Math.floor(Math.random() * (180 - 90 + 1)) + 90} min</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
