import { useNavigate } from "react-router-dom";
import Page1 from "../img/page1.jpeg";
import RF1400 from "../img/H1.png"
import alpinestarsjacket from "../img/J1.png"
import alpinestarsgloves from "../img/G1.png"
import '../App.css';

const Home = ({ addToCart }) => {
  const navigate = useNavigate();

  return (
    <>
    <h1 className="welcome">Welcome to MotoMax — Ride Faster. Ride Safer. Ride in Style.</h1>
      <section className="homepage">
        <div className="page1"onClick={() => navigate("/shop")}>
          <img src={Page1} alt="MotoMax Hero" />
        </div>
      </section>

      <h2 className="section-title">Featured Gear</h2>

      <section className="featured-products">
        <div 
          className="product-card" 
          onClick={() => navigate("/shop")}
        >
          <img src={RF1400} alt="" />
          <h3>Racing Helmet</h3>
          <p>$299.00</p>
        </div>

        <div 
          className="product-card"
          onClick={() => navigate("/shop")}
        >
          <img src={alpinestarsjacket} alt="" />
          <h3>Armored Jacket</h3>
          <p>$159.00</p>
        </div>

        <div 
          className="product-card"
          onClick={() => navigate("/shop")}
        >
          <img src={alpinestarsgloves} alt="" />
          <h3>Riding Gloves</h3>
          <p>$75.00</p>
        </div>
      </section>
    </>
  );
};

export default Home;
