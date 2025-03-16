import React from "react";
import "./Cryptoinfo.css";

const Cryptoinfo = () => {
  return (
    <div>
      {" "}
      <div className="cryptex-container">
        <div className="cryptex-content">
          <div className="cryptex-image-container">
            <img
              src="/public/images/about-banner.png"
              alt="Cryptex Dashboard"
              className="cryptex-image"
            />
          </div>
          <div className="cryptex-info">
            <h2 className="cryptex-title">What Is Cryptex</h2>
            <p className="cryptex-description">
              Experience a variety of trading on Bitcost. You can use various
              types of coin transactions such as Spot Trade, Futures Trade, P2P,
              Staking, Mining, and margin.
            </p>
            <div className="cryptex-features">
              <div className="cryptex-feature">
                <span className="feature-icon">✔</span>
                <div className="feature-content">
                  <h3 className="feature-title">
                    View real-time cryptocurrency prices
                  </h3>
                  <p className="feature-description">
                    Experience a variety of trading on Bitcost with real-time
                    price updates.
                  </p>
                </div>
              </div>
              <div className="cryptex-feature">
                <span className="feature-icon">✔</span>
                <div className="feature-content">
                  <h3 className="feature-title">
                    Buy and sell BTC, ETH, XRP, OKB, Etc...
                  </h3>
                  <p className="feature-description">
                    Trade a variety of cryptocurrencies using various
                    transaction methods.
                  </p>
                </div>
              </div>
            </div>
            <button className="cryptex-button">Explore More</button>
          </div>
        </div>
      </div>
      <div className="crypto-exchange-container">
        <div className="crypto-exchange-content">
          <div className="crypto-text">
            <h1>Buy & Sell Digital Assets In The Cryptex</h1>
            <p>
              Coin Cryptex is the easiest, safest, and fastest way to buy & sell
              crypto asset exchange.
            </p>
            <button className="get-started-btn">Get started now</button>
          </div>
          <img
            src="/src/assets/images/hero-banner.png"
            alt="Crypto Trading"
            className="crypto-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Cryptoinfo;
