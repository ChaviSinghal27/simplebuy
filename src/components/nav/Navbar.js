import { useCartContext } from "../../Context/CartContext";
import { useWishlistContext } from "../../Context/WishlistContext";
import { useFilter } from "../../Context/filterContext";
import "./Navbar.css";

import { Link } from "react-router-dom";
import Logo from "../simplebuy-logo.svg";
import man from "./man.svg";
import woman from "./woman.svg";
import user from "./user.svg";

export function Navbar() {
  const { state } = useCartContext();
  const { wishlistItem } = useWishlistContext();
  const { dispatch } = useFilter();

  return (
    <header className="header">
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="SimpleBuy Logo" />
          </Link>
        </div>

        <div className="nav-category">
          <Link
            to="/Product"
            onClick={() => dispatch({ type: "GENDER", payload: "MEN" })}
          >
            <img src={man} alt="Man Icon" /> Men
          </Link>

          <div className="category-divider"></div>
          <Link
            to="/Product"
            onClick={() => dispatch({ type: "GENDER", payload: "WOMEN" })}
          >
            {" "}
            <img src={woman} alt="Woman Icon" />
            Women
          </Link>
        </div>
        <div className="nav-items">
          <Link>
            {" "}
            <img src={user} alt="user icon" /> Account
          </Link>
          <div className="navbar-wishlist">
            <Link to="/Wishlist">
              <i class="fa-solid fa-heart"></i>
            </Link>
            <div className="wishlist-count">{wishlistItem.length}</div>
          </div>

          <div className="navbar-cart">
            <Link to="/Cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
            <div className="cart-count">{state.productsInCart.length}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
