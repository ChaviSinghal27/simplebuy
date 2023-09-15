import { useCartContext } from "../Context/CartContext";

export function CartItem({ product }) {
  const { dispatch } = useCartContext();
  return (
    <div className="cart-product-card">
      <div className="product-card">
        <img src={product.URL} className="product-card-img"></img>
      </div>
      <div className="product-card-details">
        <h2>{product.name} </h2>
        <h3>${product.price}</h3>
      </div>
      <button
        onClick={() => dispatch({ type: "HANDLE_CART", payload: product.id })}
        className="remove-button"
      >
        Remove Item
      </button>
    </div>
  );
}
