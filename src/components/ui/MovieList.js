import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Assurez-vous d'importer Link
import axios from "axios";
import "./MovieList.css"; // Assurez-vous que le fichier CSS est bien lié

const MovieList = ({ fetchUrl, title }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(fetchUrl);
        setItems(response.data.results);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [fetchUrl]);

  if (loading) return <div className="movie-container">Loading...</div>;
  if (error) return <div className="movie-container">{error}</div>;

  return (
    <div className="movie-container">
      <h1 className="movie-header">{title}</h1>
      <div className="movie-grid">
        {items.map((item) => (
          <Link key={item.id} to={`/movie/${item.id}`} className="movie-card-link">
            <div className="movie-card">
              <div className="movie-image-container">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title || item.name}
                  className="movie-poster"
                />
                {item.vote_average > 7 && <div className="movie-badge">HD</div>}
              </div>
              <div className="movie-details">
                <h3 className="movie-title1">{item.title || item.name}</h3>
                <div className="movie-meta">
                  {item.release_date && (
                    <span>{item.release_date.split("-")[0]}</span>
                  )}
                  <span>Rating: {item.vote_average}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
