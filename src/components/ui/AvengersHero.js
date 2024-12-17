import React from "react";
import bgImage from "../../images/bg_home.png"; // Chemin vers l'image d'arrière-plan

const AvengersHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "calc(100vh + 150px)", // Hauteur totale de l'écran moins la hauteur du header
        display: "flex",
        alignItems: "center", // Centré verticalement
        color: "white",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        paddingLeft: "50px", // Décalage à gauche pour le contenu
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px" }}>
          AVENGERS: ENDGAME
        </h1>
        <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "30px" }}>
          Adrift in space with no food or water, Tony Stark sends a message to
          Pepper Potts as his oxygen supply starts to dwindle.
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#FE0000",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            &#9658; Play Now
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "white",
              border: "1px solid white",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            &#128196; Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvengersHero;
