import { Navbar } from "../../components/nav/Navbar";
import "./Products.css";
import { productData } from "../../utilities/data";
import { Wishlistbutton } from "../../components/Wishlistbutton";
import { useCartContext } from "../../Context/CartContext";

import { useFilter } from "../../Context/filterContext";
import { Filter } from "../../components/filter";
import { sort } from "../../components/sort";
import { filterByGender } from "../../components/gender";
import { categoryFilter } from "../../components/category";

export function Products() {
  const { dispatch } = useCartContext();
  const { state } = useFilter();
  const { sortBy, gender, category } = state;
  const sortedProducts = sort(sortBy, productData.productList);

  const filteredGenderProducts = filterByGender(gender, sortedProducts);
  const categorisedProducts = categoryFilter(category, filteredGenderProducts);

  return (
    <>
      <Filter />
      {
        <div className="list-of-products">
          {categorisedProducts.map((products) => (
            <div key={products.id} className="product-item">
              <img src={products.URL} alt="" className="product-img"></img>
              <div className="product-detail">
                <h2>{products.name} </h2>
                <h3>${products.price}</h3>
                <button
                  onClick={() =>
                    dispatch({ type: "HANDLE_CART", payload: products.id })
                  }
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
      }
    </>
  );
}
