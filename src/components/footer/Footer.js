import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "./../simplebuy-logo.svg";

export function Footer() {
  return (
    <footer>
      <div className="footer-website-info">
        <img src={Logo} alt="SimpleBuy Logo" />
        <p>
          Welcome to SimpleBuy, where effortless style meets enduring
          sophistication and the latest trends. Discover your unique look with
          our handpicked fashion collection, each piece with its own story.
          Explore contemporary clothing, accessories, and elevate your wardrobe
          with SimpleBuy.
        </p>
      </div>
      <div className="footer-account-info">
        <h2>Navigation</h2>
        <div className="footer-items">
          <Link to="/Product">Products</Link>
          <Link to="/Cart">My Cart</Link>
          <Link to="/Wishlist">Wishlist</Link>
          <Link to="">My Account</Link>
        </div>
      </div>
      <div className="icon-list">
        <h2>Contact</h2>
        <div className="icon-list-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>Find a location nearest you</span>
        </div>
        <div className="icon-list-item">
          <i className="fas fa-phone"></i>
          <span>+91-6350259432</span>
        </div>
        <div className="icon-list-item">
          <i className="fas fa-envelope"></i>
          <span>hello@simplebuy.com</span>
        </div>
      </div>
    </footer>
  );
}
