import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      {/* Section Titre */}
      <section style={styles.headerSection}>
        <h1 style={styles.title}>About Us</h1>
        <p style={styles.subtitle}>
          Discover more about <strong>FilmCity</strong> and our mission to bring the best entertainment to your screens.
        </p>
      </section>

      {/* Section Présentation */}
      <section style={styles.contentSection}>
        <div style={styles.textBlock}>
          <h2 style={styles.sectionTitle}>Our Story</h2>
          <p style={styles.paragraph}>
            FilmCity was founded with the vision of revolutionizing the way people experience movies and series.
            Our platform provides a seamless streaming experience, offering high-quality content from around the globe.
          </p>
        </div>
        <div style={styles.textBlock}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.paragraph}>
            At FilmCity, we aim to deliver diverse and engaging content to our audience. Whether you love blockbusters, indie films,
            or the latest series, we ensure there's something for everyone.
          </p>
        </div>
      </section>

      {/* Section Valeurs */}
      <section style={styles.contentSection}>
        <h2 style={styles.sectionTitle}>Our Values</h2>
        <ul style={styles.valuesList}>
          <li style={styles.valueItem}>🎬 <strong>Quality:</strong> Premium content and HD streaming.</li>
          <li style={styles.valueItem}>🌍 <strong>Diversity:</strong> Content from different cultures and genres.</li>
          <li style={styles.valueItem}>💡 <strong>Innovation:</strong> Cutting-edge technology for a smooth experience.</li>
          <li style={styles.valueItem}>🤝 <strong>Community:</strong> Bringing movie lovers together worldwide.</li>
        </ul>
      </section>

      {/* Section Appel à l'action */}
      <section style={styles.footerSection}>
        <h2 style={styles.sectionTitle}>Join FilmCity</h2>
        <p style={styles.paragraph}>
          Become part of our growing community and explore a world of entertainment like never before!
        </p>
        <button style={styles.button}>Get Started</button>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    lineHeight: "1.6",
    color: "#333",
    padding: "20px",
    backgroundColor: "#0E161D",
  },
  headerSection: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#ff0000",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "white",
  },
  contentSection: {
    marginBottom: "40px",
    textAlign: "left",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    marginBottom: "10px",
    color: "#ff0000",
  },
  paragraph: {
    fontSize: "1rem",
    marginBottom: "10px",
    color: "white",
  },
  textBlock: {
    marginBottom: "20px",
  },
  valuesList: {
    listStyle: "none",
    padding: 0,
  },
  valueItem: {
    fontSize: "1rem",
    marginBottom: "10px",
    color:"white",
  },
  footerSection: {
    textAlign: "center",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#ff0000",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#cc0000",
  },
};

export default AboutUs;
