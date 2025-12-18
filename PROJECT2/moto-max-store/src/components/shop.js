import productData from "./productdata";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import ModalWindow from "./modalwindow";

const Shop = ({ addToCart }) => {
  const { category } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = category
    ? productData.filter(
        (item) => item.category === category
      )
    : productData;

  return (
    <section className="shop-page">
      <h2 className="section-title">
        {category ? category.toUpperCase() : "All Products"}
      </h2>

      <div className="shop-layout">
        <aside className="category-sidebar">
          <h3>Categories</h3>
          <ul>
            <li><Link to="/shop/helmets">Helmets</Link></li>
            <li><Link to="/shop/jackets">Jackets</Link></li>
            <li><Link to="/shop/gloves">Gloves</Link></li>
            <li><Link to="/shop/boots">Boots</Link></li>
          </ul>
        </aside>

        <div className="product-grid">
          {filteredProducts.map((item) => (
            <div className="product-card" key={item.id}>
              <img
                src={item.img}
                alt={item.name}
                onClick={() => setSelectedProduct(item)}
              />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button
                className="add-btn"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <ModalWindow
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        addToCart={addToCart}
      />
    </section>
  );
};

export default Shop;
