import React from "react";
import "./Mains.css";
import { Link } from "react-router-dom";

const Mains = () => {
  const steps = [
    { id: 1, title: "Download", img: "/src/assets/images/instruction-1.png" },
    {
      id: 2,
      title: "Connect Wallet",
      img: "/src/assets/images/instruction-2.png",
    },
    {
      id: 3,
      title: "Start Trading",
      img: "/src/assets/images/instruction-3.png",
    },
    { id: 4, title: "Earn Money", img: "/src/assets/images/instruction-4.png" },
  ];
  return (
    <div>
      <div className="crypto-exchange-container">
        <div className="crypto-exchange-content">
          <div className="crypto-text">
            <h1>Buy & Sell Digital Assets In The Cryptex</h1>
            <p>
              Coin Cryptex is the easiest, safest, and fastest way to buy & sell
              crypto asset exchange.
            </p>
            <a href="/home">
              <button className="get-started-btn">Get started now</button>
            </a>
          </div>
          <img
            src="/src/assets/images/hero-banner.png"
            alt="Crypto Trading"
            className="crypto-image"
          />
        </div>
      </div>
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-text">
            Stacks is a production-ready library of stackable content blocks
            built in React Native.
          </p>

          <ul className="instruction-list">
            {steps.map((step) => (
              <li key={step.id} className="instruction-card">
                <figure className="card-banner">
                  <img src={step.img} alt={`Step ${step.id}`} className="img" />
                </figure>
                <p className="card-subtitle">Step {step.id}</p>
                <h3 className="card-title">{step.title}</h3>
                <p className="card-text">
                  Stacks is a production-ready library of stackable content
                  blocks built in React Native.
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="crypto-investment-container">
        <div className="crypto-investment-content">
          <div className="crypto-image-container">
            <img
              src="/src/assets/images/app-banner.png"
              alt="Crypto App"
              className="crypto-app-image"
            />

            <button className="scan-download-btn">Scan To Download</button>
          </div>
          <div className="crypto-text">
            <h1>Free Your Money & Invest With Confident</h1>
            <p>
              With Cryptor Trade, you can be sure your trading skills are
              matched.
            </p>

            <div className="features">
              <div className="feature-item">
                <span className="check-icon">✔</span>
                <div>
                  <h3>Buy, Sell, And Trade On The Go</h3>
                  <p>Manage Your Holdings From Your Mobile Device</p>
                </div>
              </div>

              <div className="feature-item">
                <span className="check-icon">✔</span>
                <div>
                  <h3>Take Control Of Your Wealth</h3>
                  <p>
                    Rest Assured You (And Only You) Have Access To Your Funds
                  </p>
                </div>
              </div>
            </div>

            <div className="store-buttons">
              <img
                src="/src/assets/images/googleplay.png"
                alt="Google Play"
                className="store-icon"
              />
              <img
                src="/src/assets/images/appstore.png"
                alt="App Store"
                className="store-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mains;
