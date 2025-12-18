import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Shop from "./components/card";
import Cart from "./components/cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  // ADD TO CART WITH QTY LOGIC
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        // Increase qty if product already exists
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        // Add new product with qty = 1
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

  // REMOVE FROM CART
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.reduce((sum, item) => sum + item.qty, 0)} />

      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} />}
        />
        <Route
          path="/shop"
          element={<Shop addToCart={addToCart} />}
        />
        <Route
        path="/shop/:category"
        element={<Shop addToCart={addToCart} />}/>
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
      
      

      <footer className="footer">
        <div class="footer-content">
          <div class="footer-info">
            <h3>RiderZone</h3>
            <p>📍 245 W 38th St, New York, NY 10018</p>
            <p>☎️ +1 (212) 555-7832</p>
            </div>
            <p class="footer-copy">© 2025 RiderZone. All Rights Reserved.</p>
        </div> 
      </footer>
    </BrowserRouter>
  );
}

export default App;
