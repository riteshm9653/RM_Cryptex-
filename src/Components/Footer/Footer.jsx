import { FaTwitter, FaDiscord, FaTelegram, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="crypto-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <img
                src="/images/logo.svg"
                width="40"
                height="40"
                alt="Cryptex logo"
              />
              Cryptex
            </div>
            <p className="footer-description">
              Welcome to a CryptoCurrency marketplaces .sign up to expolre to
              more about the cryptos.Thank you
            </p>
            <ul className="social-links">
              <li>
                <a href="#" className="social-icon">
                  <FaTwitter size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="social-icon">
                  <FaDiscord size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="social-icon">
                  <FaTelegram size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="social-icon">
                  <FaGithub size={24} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-heading">Explore</p>
            <ul className="footer-links">
              <li>
                <a href="#">Blockchain</a>
              </li>
              <li>
                <a href="#">DeFi</a>
              </li>
              <li>
                <a href="#">NFTs</a>
              </li>
              <li>
                <a href="#">Tokenomics</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-heading">Support</p>
            <ul className="footer-links">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="newsletter">
            <p className="footer-heading">Get Updates</p>
            <form className="subscribe-form">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="subscribe-input"
              />
              <button type="submit" className="subscribe-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="footer-divider" />
        <p className="footer-copy">
          © {new Date().getFullYear()}, Powered by Blockchain. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
