import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";
const Home = () => {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [search, setSearch] = useState("");

  const inputHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setDisplayCoin(allCoins);
    }
  };
  const searchHandler = async (event) => {
    event.preventDefault();
    const Coins = await allCoins.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    console.log(Coins);
    setDisplayCoin(Coins);
  };
  useEffect(() => {
    console.log("Maurya");
    console.log(allCoins);
    setDisplayCoin(allCoins);
  }, [allCoins]);

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br />
          Crypto MarketPlace
        </h1>
        <p>
          Wlecome to a CryptoCurrency marketplaces .sign up to expolre to more
          about the cryptos
        </p>
        <form action="" onSubmit={searchHandler}>
          <input
            type="text"
            list="Coinlist"
            placeholder="Search Cryoto here"
            className="search"
            required
            value={search}
            onChange={inputHandler}
          />
          <datalist id="Coinlist">
            {allCoins.map((coin) => {
              return (
                <option key={coin.id} value={coin.name}>
                  {coin.name}
                </option>
              );
            })}
          </datalist>
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p style={{ textAlign: "left" }}>Price</p>
          <p style={{ textAlign: "center" }} className="change_price">
            24H Change
          </p>
          <p style={{ textAlign: "right" }}>Market Cap</p>
        </div>
      </div>
      {displayCoin?.slice(0, 10).map((coin, index) => {
        return (
          <Link to={`/coin/${coin.id}`} className="crypto-table " key={index}>
            <div className="table-layout">
              <p>{coin.market_cap_rank}</p>
              <div className="">
                <img src={coin.image} alt="" />
                <p className="coin-name"> {coin.name + "- " + coin.symbol}</p>
              </div>
              <p style={{ textAlign: "left" }}>
                {currency.symbol}
                {coin.current_price}
              </p>
              <div className="">
                <div className="change_price">
                  {" "}
                  {coin.price_change_percentage_24h > 0 ? (
                    <span style={{ color: "green" }}>
                      {coin.price_change_percentage_24h + " %"}
                    </span>
                  ) : (
                    <span style={{ color: "red" }}>
                      {coin.price_change_percentage_24h + " %"}
                    </span>
                  )}
                </div>
              </div>
              <p style={{ textAlign: "right" }} className="marketcap">
                {currency.symbol}
                {coin.market_cap.toLocaleString()}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
