import React from "react";

function ProductCard({ name, image, price, inStock }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />

      <h2>{name}</h2>
      <p>Price: ${price}</p>

      <p className="stock">
        {inStock} 
      </p>
    </div>
  );
}

export default ProductCard;
