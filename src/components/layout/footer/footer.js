import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../images/logo.png";
import "./footer.css";

import {
  faXTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        {/* Section Logo et Description */}
        <div style={styles.section}>
          <img src={logo} alt="FilmCity Logo" style={styles.logo} />
          <p style={styles.description}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* Section Liens Rapides */}
        <div style={styles.section}>
          <h3 style={styles.title}>Quick Link</h3>
          <ul style={styles.links}>
            <li>
              <a href="/" style={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href="movies" style={styles.link}>
                Movies
              </a>
            </li>
            <li>
              <a href="series" style={styles.link}>
                Series
              </a>
            </li>
            <li>
              <a href="about" style={styles.link}>
                About
              </a>
            </li>
            <li>
              <a href="contact" style={styles.link}>
                Contact
              </a>
            </li>
          </ul>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.icon}>
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="#" style={styles.icon}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" style={styles.icon}>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#" style={styles.icon}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Section Abonnement */}
        <div style={styles.section}>
          <h3 style={styles.title}>Subscribe</h3>
          <p style={styles.subscribeText}>Subscribe to Our Newsletter</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "white", // Fond blanc
    color: "black", // Texte noir
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  section: {
    flex: "1",
    minWidth: "250px",
    marginBottom: "20px",
    textAlign: "center",
  },
  logo: {
    width: "150px",
    marginBottom: "10px",
  },
  description: {
    fontSize: "14px",
    color: "#555", // Gris légèrement plus foncé
    lineHeight: "1.6",
  },
  title: {
    color: "red", // Titre en rouge
    fontSize: "1.2rem",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  links: {
    listStyle: "none",
    padding: 0,
    margin: "0",
    display: "flex", // Utiliser flexbox pour aligner horizontalement
    justifyContent: "center", // Centrer les éléments horizontalement
    gap: "15px", // Espacement entre les liens
  },
  link: {
    textDecoration: "none",
    color: "black", // Liens en noir
    fontSize: "14px",
    display: "inline-block", // Assurez-vous qu'il s'affiche en ligne
    transition: "color 0.3s",
  },
  socialIcons: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  icon: {
    color: "black", // Icônes en noir
    fontSize: "20px",
    transition: "color 0.3s, transform 0.3s",
  },
  subscribeText: {
    fontSize: "14px",
    color: "black",
    marginTop: "10px",
  },
};

export default Footer;
