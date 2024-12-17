import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
    const [showTable, setShowTable] = useState(false);

    const toggleTable = () => {
        setShowTable(!showTable);
    };

    // Subscription packages (excluding "Free" for cards)
    const packages = [
        {
            name: "VIP Mobile",
            price: "27.99DH",
            buttonText: "Subscribe",
            description: "Exclusive mobile access to top content at an affordable price.",
        },
        {
            name: "VIP",
            price: "48.99DH",
            buttonText: "Subscribe",
            description: "Enjoy ad-free streaming, big-screen compatibility, and premium content.",
        },
        {
            name: "VIP | BigTime",
            price: "87.99DH",
            buttonText: "Subscribe",
            description: "Access exclusive concerts, events, and all VIP benefits.",
        },
        {
            name: "VIP | Sports",
            price: "97.99DH",
            buttonText: "Subscribe",
            description: "Enjoy the biggest sports events live, with full VIP perks.",
        },
        {
            name: "Ultimate",
            price: "135.99DH",
            buttonText: "Subscribe",
            description: "The complete entertainment package with all features included.",
        },
    ];

    // Features list
    const features = [
        "Ad-free",
        "Watch on big screen",
        "Arabic & non-Arabic content",
        "Original & premium content",
        "Arabic kids content",
        "Access to the biggest local and international live sports",
        "Live concerts and events",
        "Live channels",
        "Shahid digital channels",
    ];

    // Feature availability for each package
    const featureAvailability = [
        ["-", "✔", "✔", "✔", "✔", "✔"], // Ad-free
        ["-", "✔", "✔", "✔", "✔", "✔"], // Watch on big screen
        ["-", "✔", "✔", "✔", "✔", "✔"], // Arabic & non-Arabic content
        ["-", "-", "✔", "✔", "✔", "✔"], // Original & premium content
        ["-", "-", "✔", "-", "✔", "✔"], // Arabic kids content
        ["-", "-", "-", "-", "✔", "✔"], // Access to live sports
        ["-", "-", "-", "✔", "-", "✔"], // Live concerts and events
        ["-", "-", "-", "-", "-", "✔"], // Live channels
        ["✔", "✔", "✔", "✔", "✔", "✔"], // Shahid digital channels
    ];

    return (
        <main className="signup-main">
            <div className="signup-header">
                <h1>Unlock more with your Filmcity subscription!</h1>
                <p>
                    Filmcity Originals, exclusive series, blockbuster premieres, and live TV excitement –
                    your ultimate entertainment hub and much more.
                </p>
            </div>
            <div className="signup-packages">
                {packages.map((pkg, index) => (
                    <div key={index} className="package-card">
                        <h4>{pkg.name}</h4>
                        <p className="package-price">{pkg.price}/month</p>
                        <p className="package-description">{pkg.description}</p>
                        <button className="subscribe-button">{pkg.buttonText}</button>
                    </div>
                ))}
            </div>
            <div className="signup-footer">
                <h1 onClick={toggleTable} className="compare-title">
                    Compare packages &#9662;
                </h1>
            </div>
            {showTable && (
                <div className="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Features</th>
                                {["Free", ...packages.map(pkg => pkg.name)].map((name, index) => (
                                    <th key={index}>{name}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td>{feature}</td>
                                    {featureAvailability[rowIndex]?.map((availability, colIndex) => (
                                        <td key={colIndex}>{availability}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
};

export default SignUp;
