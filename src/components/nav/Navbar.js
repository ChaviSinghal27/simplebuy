import { useCartContext } from "../../Context/CartContext";
import { useWishlistContext } from "../../Context/WishlistContext";
import { useFilter } from "../../Context/filterContext";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export function Navbar() {
  const { state } = useCartContext();
  const { wishlistItem } = useWishlistContext();
  const { dispatch } = useFilter();

  return (
    <header className="header">
      <div className="navbar">
        <div>
          <Link to="./">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </div>

        <div className="nav-category">
          <Link
            to="/Product"
            onClick={() => dispatch({ type: "GENDER", payload: "MEN" })}
          >
            Men
          </Link>
          <Link
            to="/Product"
            onClick={() => dispatch({ type: "GENDER", payload: "WOMEN" })}
          >
            Women
          </Link>
        </div>
        <div className="nav-items">
          <Link>Account</Link>
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
