import { useCartContext } from "../Context/CartContext";

export function CartItem({ product }) {
  const { dispatch } = useCartContext();
  return (
    <div className="cart-product-card">
      <div>
        {" "}
        <img src={product.URL} className="product-card-img" alt="jk"></img>
      </div>

      <div className="product-card-name">
        <h3>Product</h3>
        <h2>{product.name} </h2>
      </div>
      <div className="product-card-price">
        <h3>Price</h3>
        <h2>${product.price}</h2>
      </div>
      <div>
        <button
          onClick={() => dispatch({ type: "HANDLE_CART", payload: product.id })}
          className="remove-button"
        >
          Remove Item
        </button>
      </div>
    </div>
  );
}
