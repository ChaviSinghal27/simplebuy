import { useCartContext } from "../Context/CartContext";
import { CartItem } from "../components/CartItem";
import { productData } from "../utilities/data";
import "./cart.css";

export function Cart() {
  const { state } = useCartContext();

  let cartItems = productData.productList.filter((product) =>
    state.productsInCart.includes(product.id)
  );

  const initialValue = 0;
  const priceOfItems = cartItems.map((products) => products.price);
  const TotalPrice = priceOfItems.reduce(
    (accumulater, currentValue) => accumulater + currentValue,
    initialValue
  );

  return (
    <div className="cart-page">
      <div className="cart-header">
        {" "}
        <h2>Your Cart</h2>
      </div>

      {cartItems.length === 0 ? (
        <div>
          <h2>Nothing to show here start shopping !!</h2>
        </div>
      ) : (
        <div className="cart-page-items">
          <div className="cart-sections">
            <div className="left-cart-section">
              {cartItems.map((products) => (
                <div className="cart-page-left-bar">
                  <CartItem product={products} />
                </div>
              ))}
            </div>

            <div className="bill">
              <h2>Cart Amount</h2>
              <div className="bill-details">
                <div>
                  <h3>Items</h3>
                  <h3>{cartItems.length}</h3>
                </div>
                <div>
                  <h3>Subtotal</h3>
                  <h3>${TotalPrice}</h3>
                </div>
                <div>
                  <h3>shipping charges</h3>
                  <h3>$52</h3>
                </div>
                <div className="horizontal-line"></div>
                <div>
                  <h3>TotalPrice</h3>
                  <h3>${TotalPrice + 52}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
