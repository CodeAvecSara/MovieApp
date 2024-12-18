import React from "react";
import "./Subscribe.css"; // Import du CSS

const Subscribe = () => {
    return (
        <main class="body">
        <div className="subscribe-form-container">
            <h1 className="form-title">Subscribe </h1>
            <form className="subscribe-form">
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Enter your full name" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Create a password" />
                </div>

                <button type="submit" className="subscribe-btn">Subscribe</button>
            </form>
        </div>
        </main>
    );
};

export default Subscribe;
