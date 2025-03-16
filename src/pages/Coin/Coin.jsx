import React, { useContext, useEffect, useState } from "react";
import "./Coins.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../Components/LineChart/LineChart";
const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(CoinContext);
  const fetchCoin = async () => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => setCoinData(res))
      .catch((err) => console.error(err));
  };

  const fetchHistoricalData = async () => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    )
      .then((res) => res.json())
      .then((res) => setHistoricalData(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoin();
    fetchHistoricalData();
  }, [currency]);

  if ((coinData, historicalData)) {
    console.log(coinData);
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coinData?.image.large} alt="" />
          <p>
            <b>
              {coinData?.name}({coinData?.symbol})
            </b>
          </p>
        </div>
        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank </li>
            <li>{coinData?.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Markets Prices</li>
            <li>
              {currency.symbol}
              {coinData?.market_data.market_cap[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>Current Price:</li>
            <li>
              {currency.symbol}
              {coinData?.market_data.current_price[
                currency.name
              ].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24h Price High</li>
            <li>
              {currency.symbol}
              {coinData?.market_data.high_24h[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24h Price Low</li>
            <li>
              {currency.symbol}
              {coinData?.market_data.low_24h[currency.name].toLocaleString()}
            </li>
          </ul>
        </div>
        <div className="hero-container">
          <section className="hero-section">
            <div className="hero-content">
              {/* Left Side: Crypto Info */}
              <div className="hero-text">
                <h1>Track Your Favorite Cryptocurrency</h1>
                <p>
                  Get real-time updates on market prices, rankings, and trends.
                  Stay ahead with accurate crypto insights.
                </p>

                {/* Coin Info Section */}
                <div className="coin-name">
                  <img src={coinData?.image.large} alt={coinData?.name} />
                  <p>
                    <b>
                      {coinData?.name} ({coinData?.symbol.toUpperCase()})
                    </b>
                  </p>
                </div>

                <div className="coin-info">
                  <ul>
                    <li>Crypto Market Rank:</li>
                    <li>{coinData?.market_cap_rank}</li>
                  </ul>
                  <ul>
                    <li>Market Price:</li>
                    <li>
                      {currency.symbol}
                      {coinData?.market_data.market_cap[
                        currency.name
                      ].toLocaleString()}
                    </li>
                  </ul>
                  <ul>
                    <li>Current Price:</li>
                    <li>
                      {currency.symbol}
                      {coinData?.market_data.current_price[
                        currency.name
                      ].toLocaleString()}
                    </li>
                  </ul>
                  <ul>
                    <li>24h High:</li>
                    <li>
                      {currency.symbol}
                      {coinData?.market_data.high_24h[
                        currency.name
                      ].toLocaleString()}
                    </li>
                  </ul>
                  <ul>
                    <li>24h Low:</li>
                    <li>
                      {currency.symbol}
                      {coinData?.market_data.low_24h[
                        currency.name
                      ].toLocaleString()}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side: Image */}
            </div>
            <div className="hero-image">
              <img src={coinData?.image.large} alt="Crypto Illustration" />
            </div>
          </section>
        </div>
        <div className="coin-chart">
          <LineChart historicalData={historicalData} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="full-screen-container">
        <div className="spinner"></div>
        <h1>Loading...</h1>
      </div>
    );
  }
};

export default Coin;
