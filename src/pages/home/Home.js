import { useFilter } from "../../Context/filterContext";
import { Heroimg } from "../../components/Heroimg/Heroimg";
import { Footer } from "../../components/footer/Footer";

import "./Home.css";
import { Link } from "react-router-dom";

export function CategoryCard() {
  const { dispatch } = useFilter();
  return (
    <div className="categorycard">
      <div className="categorycard-img">
      <div className="categorycard-overlay"></div>
        <img src="https://www.nat-nin.com/cdn/shop/collections/Categorie-Sac_femme.jpg?" alt=""></img>
        <div className="categorycard-overlay"></div>

        <div>
          <Link
            to="/Product"
            onClick={() => dispatch({ type: "CATEGORY", payload: "BAGS" })}
            className="categorycard-button"
          >
            Bags
          </Link>
        </div>
      </div>
      <div className="categorycard-img">
      <div className="categorycard-overlay"></div>
        <img src="https://www.nat-nin.com/cdn/shop/collections/Capture_d_ecran_2022-05-25_a_15.05_2.png?" alt=""></img>
        <div className="categorycard-overlay"></div>
        <div>
          <Link
            to="/Product"
            onClick={() =>
              dispatch({ type: "CATEGORY", payload: "ACCESORIES" })
            }
            className="categorycard-button"
          >
            Accesories
          </Link>
        </div>
      </div>
      <div className="categorycard-img">
      
        <img src="https://www.nat-nin.com/cdn/shop/collections/Capture_d_ecran_2022-05-25_a_15.07_2.png?" alt=""></img>
        <div className="categorycard-overlay"></div>
        <div>
          <Link
            to="Product"
            onClick={() => dispatch({ type: "CATEGORY", payload: "SHOES" })}
            className="categorycard-button"
          >
            Shoes
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <>
      <Heroimg />
      <CategoryCard />
      <Footer />
    </>
  );
}
