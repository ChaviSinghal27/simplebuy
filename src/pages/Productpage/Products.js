import React from "react";
import "./Products.css";
import { Footer } from "../../components/footer/Footer";
import { productData } from "../../utilities/data";
import { Wishlistbutton } from "../../components/Wishlistbutton";
import { useCartContext } from "../../Context/CartContext";
import { useFilter } from "../../Context/filterContext";
import { Filter } from "../../components/filter";
import { sort } from "../../components/sort";
import { filterByGender } from "../../components/gender";
import { categoryFilter } from "../../components/category";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.URL} alt={product.name} className="product-img" />
      <div className="product-details">
        <h3 className="product-price">${product.price}</h3>
        <h2 className="product-name">{product.name}</h2>
        <button
          className="add-to-cart-button"
          onClick={() => addToCart(product.id)}
        >
          Add To Cart
        </button>
      </div>
      <div className="product-wishlist">
        <Wishlistbutton productId={product.id} />
      </div>
    </div>
  );
}

export function Products() {
  const { dispatch } = useCartContext();
  const { state } = useFilter();
  const { sortBy, gender, category } = state;
  const sortedProducts = sort(sortBy, productData.productList);

  const filteredGenderProducts = filterByGender(gender, sortedProducts);
  const categorisedProducts = categoryFilter(category, filteredGenderProducts);

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Our Exquisite Collection</h1>
        </div>
      </section>

      <div className="filter">
        <Filter />
      </div>

      <div className="products-container">
        {categorisedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={(productId) =>
              dispatch({ type: "HANDLE_CART", payload: productId })
            }
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
