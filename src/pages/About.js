import React from "react";
import AboutBg from "../images/AboutBg.jpg"; // Importer l'image depuis le dossier images

const AboutUs = () => {
  return (
    <div style={{ ...styles.container }}>
      {/* Section Title */}
      <section style={styles.headerSection}>
        <h1 style={styles.gradientTitle}>About Us</h1>
        <p style={styles.subtitle}>
          Discover more about <strong>FilmCity</strong> and our mission to bring the best entertainment to your screens.
        </p>
      </section>

      {/* Section Presentation */}
      <section style={styles.contentSection}>
        <div style={styles.card}>
          <h2 style={styles.gradientTitle}>Our Story</h2>
          <p style={styles.paragraph}>
            FilmCity was founded with the vision of revolutionizing the way people experience movies and series.
            Our platform provides a seamless streaming experience, offering high-quality content from around the globe.
          </p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.gradientTitle}>Our Mission</h2>
          <p style={styles.paragraph}>
            At FilmCity, we aim to deliver diverse and engaging content to our audience. Whether you love blockbusters, indie films,
            or the latest series, we ensure there's something for everyone.
          </p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.gradientTitle}>Our Values</h2>
          <ul style={styles.valuesList}>
            <li style={styles.valueItem}>🎬 <strong>Quality:</strong> Premium content and HD streaming.</li>
            <li style={styles.valueItem}>🌍 <strong>Diversity:</strong> Content from different cultures and genres.</li>
            <li style={styles.valueItem}>💡 <strong>Innovation:</strong> Cutting-edge technology for a smooth experience.</li>
            <li style={styles.valueItem}>🤝 <strong>Community:</strong> Bringing movie lovers together worldwide.</li>
          </ul>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section style={styles.footerSection}>
        <h2 style={styles.gradientTitle}>Join FilmCity</h2>
        <p style={styles.paragraph}>
          <center>Become part of our growing community and explore a world of entertainment like never before!</center>
        </p>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.background = styles.buttonHover.background)}
          onMouseLeave={(e) => (e.target.style.background = styles.button.background)}
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    lineHeight: "1.6",
    color: "#fff",
    padding: "50px",
    minHeight: "100vh",
    backgroundImage: `url(${AboutBg})`, // Image d'arrière-plan
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Couche noire semi-transparente
    backgroundBlendMode: "overlay", // Fusionne la couleur et l'image
  },
  headerSection: {
    textAlign: "center",
    marginBottom: "60px",
    color: "#FFF",
  },
  gradientTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    background: "linear-gradient(to right, #FE0000, #007AFF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
    marginBottom: "15px",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#d0d0d0",
  },
  contentSection: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    marginBottom: "50px",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    width: "30%",
    minWidth: "250px",
    maxWidth: "400px",
    color: "#fff",
  },
  paragraph: {
    fontSize: "1rem",
    marginBottom: "20px",
    textAlign: "justify",
    color: "#e0e0e0",
  },
  valuesList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  valueItem: {
    fontSize: "1.1rem",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  footerSection: {
    textAlign: "center",
    marginTop: "30px",
  },
  button: {
    padding: "12px 25px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    background: "linear-gradient(to right, #FE0000, #007AFF)",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    transition: "background 0.3s ease",
  },
  buttonHover: {
    background: "linear-gradient(to right, #007AFF, #FE0000)",
  },
};

export default AboutUs;
