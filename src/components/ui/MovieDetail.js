import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdb from "../services/api";
import "./MovieDetail.css"; // Créez un fichier CSS pour le design

const MovieDetail = () => {
  const { id } = useParams(); // Récupère l'ID du film depuis l'URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await tmdb.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des détails du film :", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Chargement...</div>; // Affiche un message de chargement si les données ne sont pas encore disponibles
  }

  return (
    <div className="movie-detail-container">
      <div
        className="movie-backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="movie-overlay">
          <div className="movie-info">
            <h1 className="movie-title">{movie.title}</h1>
            <div className="movie-meta">
              <span className="movie-rating">⭐ {movie.vote_average}</span>
              <span className="movie-year">{new Date(movie.release_date).getFullYear()}</span>
              <span className="movie-runtime">{movie.runtime} min</span>
              <span className="movie-genres">
                {movie.genres.map((genre) => genre.name).join(", ")}
              </span>
            </div>
            <p className="movie-overview">{movie.overview}</p>
            <div className="movie-actions">
              <button className="watch-now-btn">Watch Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
