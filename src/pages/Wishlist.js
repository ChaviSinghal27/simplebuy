import { useCartContext } from "../Context/CartContext";
import { useWishlistContext } from "../Context/WishlistContext";
import { Wishlistbutton } from "../components/Wishlistbutton";
import { Navbar } from "../components/nav/Navbar";
import { productData } from "../utilities/data";

export function Wishlist () {
const {dispatch} = useCartContext();
    const {wishlistItem} = useWishlistContext();

    let wishlistProducts = productData.productList.filter((product) => wishlistItem.includes(product.id))
    
    return (
        <div className="wishlist">

        <h2>Your Wishlist</h2>

        {wishlistItem.length === 0 ? "Nothing to show here start shopping" :
        <div className="list-of-products">
        {   
          wishlistProducts.map((products)=> (
                <div className="product-item">
                    <img src={products.URL} alt=""  className="product-img"></img>
                <div className="product-detail">
                <h2>{products.name} </h2>
                <h3>{products.price}</h3>
                <button onClick={() => dispatch({type: "HANDLE_CART" , payload: products.id })}>Add To Cart</button>
                </div>
                <div className="product-wishlist">
            <Wishlistbutton productId={products.id} />
        </div>
                </div>
                )) 
        }
      
        </div>
        }

        </div>
    )
}