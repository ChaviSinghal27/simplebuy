import "./Heroimg.css";
import { Link } from "react-router-dom";
export function Heroimg() {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg"
        className="heroimg"
      ></img>
      <Link to="/Product" className="heroimg-button">
        Shop Now
      </Link>
    </div>
  );
}
