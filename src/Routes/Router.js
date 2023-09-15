import {Routes , Route} from "react-router-dom"
import { Home } from "../pages/home/Home"
import { Products } from "../pages/Productpage/Products"
import { Cart } from "../pages/Cart"
import { Wishlist } from "../pages/Wishlist"

export function Router () {
    return (
        <div>
            <Routes>
<Route path="/"  exact element={<Home/>} />
<Route path="/Product" element = {<Products/>} />
<Route path = "/Cart" element = {<Cart/>} />
<Route path = "/Wishlist" element = {<Wishlist/>} />

            </Routes>
        </div>
    )
}