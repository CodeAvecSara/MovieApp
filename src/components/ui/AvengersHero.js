import React from 'react';
import bgImage from '../../images/bg_home.png'; // Chemin relatif vers l'image

const AvengersHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`, // Utilisation correcte d'une URL dynamique
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '640px', // Ajuster la hauteur si nécessaire
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
      }}
    >
      <h1>Avengers: Endgame</h1>
    </div>
  );
};

export default AvengersHero;
