import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler un envoi de données
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Section Titre */}
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>
          Have questions, suggestions, or just want to say hello? Reach out to us!
        </p>

        {/* Section Formulaire */}
        {submitted ? (
          <p style={styles.successMessage}>
            Thank you for your message! We'll get back to you soon. 🎉
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label htmlFor="name" style={styles.label}>
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="message" style={styles.label}>
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
                required
              ></textarea>
            </div>
            <button type="submit" style={styles.button}>
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// Styles en objet JS
const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#0E161D",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  content: {
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    padding: "40px",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "600px",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    color: "#ff0000",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "30px",
  },
  successMessage: {
    fontSize: "1.2rem",
    color: "green",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputGroup: {
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#333",
    fontSize: "0.9rem",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    minHeight: "100px",
  },
  button: {
    backgroundColor: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#cc0000",
  },
};

export default Contact;
