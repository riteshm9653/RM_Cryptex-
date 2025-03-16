import "./Navbar.css";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow_icon.png";
import { useContext, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <img src={logo} width="40" height="40" alt="Cryptex logo" />
          Cryptex
        </div>
      </Link>
      <div className="menu">
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <Link to="/home" onClick={toggleMenu}>
          <li>Home</li>
        </Link>
        <Link to="/info" onClick={toggleMenu}>
          <li>Features</li>
        </Link>
        <li onClick={toggleMenu}>Pricing</li>
        <li onClick={toggleMenu}>Blogs</li>
      </ul>

      <div className="nav-right">
        <select className="select" onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <div className="sign-out">
          <Link to="/singup">
            <button>
              Sign Out{" "}
              <span>
                <img src={arrow} alt="" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
