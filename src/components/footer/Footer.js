import {Link} from "react-router-dom"
import "./Footer.css"

export function Footer() {
    return (
<footer>
    <div className="footer-website-info">
        <h2>Company</h2>
        <div className="footer-items">
            
                <p>Find a location nearest you</p>
                <p>+91-6350259432</p>
                <p>hello@simplebuy.com</p>
                
    
        </div>
    </div>
    <div className="footer-account-info">
    <h2>Information</h2>
    <div className="footer-items"> 
    <Link to="/Product" >Products</Link> 
    <Link to="/Cart" >My Cart</Link>
    <Link to="/Wishlist" >Wishlist</Link>
    <Link to="" >My Account</Link>

    </div>
</div>
    
</footer>

    )
}