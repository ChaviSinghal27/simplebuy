import { useCartContext } from "../Context/CartContext";
import { CartItem } from "../components/CartItem";
import { productData } from "../utilities/data";

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
      {cartItems.length === 0 ? (
        "Nothing to show here start shopping"
      ) : (
        <div className="cart-page-items">
          {/* <div>
            {TotalPrice <= 5000
              ? "Gift voucher of $500 on shopping above $5000"
              : ""}
          </div> */}
          <div style={{ paddingTop: "100px" }}>
            {cartItems.map((products) => (
              <div className="cart-page-left-bar">
                <CartItem product={products} />
              </div>
            ))}
          </div>
          <div className="bill">
            <div>
              <h2>Bill Details</h2>
              <h3>Items {cartItems.length}</h3>
              <h3>{TotalPrice <= 3000 ? "Delivery Charges     :$150" : ""}</h3>
              <h3>Delivery free above :$3000</h3>
              <h3>Delivery in 3 days</h3>
              <h3>Total Amount :${TotalPrice}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
