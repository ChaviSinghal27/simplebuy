import { Link } from "react-router-dom";
import "./Heroimg.css";

export function Heroimg() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h4 className="HeroSubtitle">Discover the Latest Trends in Fashion</h4>
        <h2 className="HeroTitle">
          Elevate <br />
          <span className="your-style">Your Style</span>
        </h2>
        <p className="HeroDescription">
          Step into a world of timeless elegance and contemporary trends.
          Unleash your unique style with{" "}
          <b>our curated collection of exquisite fashion apparel</b>, where
          every piece tells a story.
        </p>
        <div>
          <Link to="/Product" className="heroimg-button">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
