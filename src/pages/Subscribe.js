import React, { useState } from "react";
import "./Subscribe.css";

const Subscribe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        paymentMethod: "paypal",
        cardNumber: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <main className="body">
            <div className="subscribe-form-container">
                <h1 className="form-title">Subscribe</h1>
                <form className="subscribe-form" onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Payment Method */}
                    <div className="form-group">
                        <label htmlFor="paymentMethod">Payment Method</label>
                        <select
                            id="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                            className="payment-method-select"
                        >
                            <option value="paypal">PayPal</option>
                            <option value="mastercard">Mastercard</option>
                            <option value="creditCard">Credit Card</option>
                        </select>
                    </div>

                    {/* Credit Card Details */}
                    {formData.paymentMethod === "creditCard" && (
                        <div className="form-group card-details active">
                            <label htmlFor="cardNumber">Card Number </label>
                            <input
                                type="text"
                                id="cardNumber"
                                placeholder="Enter your card number"
                                value={formData.cardNumber}
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    <button type="submit" className="subscribe-btn">
                        Subscribe
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Subscribe;
