import React from "react";
import "./SignIn.css"; // Import du CSS

const SignIn = () => {
    return (
        <main class="bodySignIn">
        <div className="signin-form-container">
            <h1 className="form-title">Sign In </h1>
            <form className="signin-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" />
                </div>

                <button type="submit" className="signin-btn">Sign In</button>
            </form>
            <p className="signup-link">
                Don't have an account? <a href="/subscribe">Subscribe now</a>
            </p>
        </div>
        </main>
    );
};

export default SignIn;
