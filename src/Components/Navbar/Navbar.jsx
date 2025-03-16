import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyyHandler = (e) => {
    switch (e.target.value) {
      case "usd":
        console.log(e.target.value);
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <img
            src="/src/assets/images/logo.svg"
            width="40"
            height="40"
            alt="Cryptex logo"
          />
          Cryptex
        </div>
      </Link>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/info">
          <li>Features</li>
        </Link>
        <li>Pricing</li>
        <li>Blogs</li>
      </ul>
      <div className="nav-right">
        <select className="select" onChange={currencyyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <div className="sign-out">
          <button className="">
            Sign Out{" "}
            <span>
              <img src={arrow} alt="" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
