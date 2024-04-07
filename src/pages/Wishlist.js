import { useCartContext } from "../Context/CartContext";
import { useWishlistContext } from "../Context/WishlistContext";
import { Wishlistbutton } from "../components/Wishlistbutton";
import "./Wishlist.css";
import { productData } from "../utilities/data";

export function Wishlist() {
  const { dispatch } = useCartContext();
  const { wishlistItem } = useWishlistContext();

  let wishlistProducts = productData.productList.filter((product) =>
    wishlistItem.includes(product.id)
  );

  return (
    <div className="wishlist">
      <div className="wishlist-heading">
        <h2>Your Wishlist</h2>
      </div>

      {wishlistItem.length === 0 ? (
        <div className="wishlist-content">
          <h2>Nothing to show here start shopping !!</h2>
        </div>
      ) : (
        <div className="list-of-products">
          {wishlistProducts.map((products) => (
            <div className="product-item">
              <img src={products.URL} alt="" className="product-img"></img>
              <div className="product-detail">
                <h2 className="product-name">{products.name} </h2>
                <h3 className="product-price">{products.price}</h3>
                <button
                  onClick={() =>
                    dispatch({ type: "HANDLE_CART", payload: products.id })
                  }
                  className="add-to-cart-button"
                >
                  Add To Cart
                </button>
              </div>
              <div className="product-wishlist">
                <Wishlistbutton productId={products.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
