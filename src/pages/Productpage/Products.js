import { Navbar } from "../../components/nav/Navbar";
import "./Products.css"
import { productData } from "../../utilities/data";
import { Wishlistbutton } from "../../components/Wishlistbutton";

export function Products() {
return (
    <>
    <Navbar/>
{
    <div className="list-of-products">
    {productData.productList.map((products) => (
    <div className="product-item">
        <img src={products.URL} alt="" className="product-img" ></img>
        <div className="product-detail">
        <h2>{products.name} </h2>
        <h3>{products.price}</h3>
        <button>Add To Cart</button>
        </div>
        <div className="product-wishlist">
            <Wishlistbutton />
        </div>
    
        
    </div>
    
    ))}
</div>
}
</>
)
}