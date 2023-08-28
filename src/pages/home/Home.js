import { Heroimg } from "../../components/Heroimg/Heroimg";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/nav/Navbar";
import "./Home.css"

export function CategoryCard() {
    return (
        
< div className = "categorycard">
<div className="categorycard-img">
<img src="https://www.nat-nin.com/cdn/shop/collections/Categorie-Sac_femme.jpg?"></img>

<div>
<button className="categorycard-button1" >Bags</button>
</div>
</div>
<div className="categorycard-img" >
<img src = "https://www.nat-nin.com/cdn/shop/collections/Capture_d_ecran_2022-05-25_a_15.05_2.png?"></img>
<div>
<button className="categorycard-button2">Accesories</button>
</div>
</div>
<div className="categorycard-img" >
<img src="https://www.nat-nin.com/cdn/shop/collections/Capture_d_ecran_2022-05-25_a_15.07_2.png?"></img>
<div>
<button className="categorycard-button3">Shoes</button>
</div>
</div>
</div>
    )
}


export function Home () {
    return (
        <>
        <Navbar/>
        <Heroimg/>
        <CategoryCard/>
    <Footer/>
        </>
    )
}