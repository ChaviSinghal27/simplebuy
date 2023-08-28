import "./Navbar.css";

export function Navbar() {
    return (
<header className="header">
    <div className = "navbar"> 
        <div className ="logo">
        <button>SIMPLEBUY</button>
        </div>
   
<div className = "nav-category">
    <button>Men</button>
    <button>Women</button>
</div>
<div className ="nav-items">
    <button>Account</button>
    <button>Wishlist</button>
    <button>Cart</button>
</div>
    </div>

</header>
        
   

    )
       
    
      
    
}