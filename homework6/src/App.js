import React from 'react';
import ProductCard from './productcard';
import './App.css';
import WirelessHeadphones from './img/Unknown.jpeg'
import SmartWatch from './img/Smart Watch.jpeg'
import GamingMouse from './img/Gaming Mouse.jpeg'
import MechanicalKeyboard from './img/Mechanical Keyboard.jpeg'
import BluetoothSpeaker from './img/Bluetooth Speaker.jpeg'
import LaptopStand from './img/Laptop Stand.jpeg'
import USBC_Hub from './img/USB-C Hub.jpeg'
import Monitor4K from './img/4K Monitor.jpeg'
import PortableSSD from './img/Portable SSD.jpeg'
import Webcam from './img/Webcam.jpeg'


function Card() {

  { <h1 style={{textAlign:"center"}}>productcard listing by Nihar Patel </h1> }

  const products = [
    { productname:"Wireless Headphones",  image: WirelessHeadphones , price: 59.99, inStock: "In of Stock" },
    { productname: "Smart Watch",         image: SmartWatch,          price: 129.99,inStock: "*Out of Stock*"},
    { productname: "Gaming Mouse",        image: GamingMouse,         price: 39.99, inStock: "In of Stock" },
    { productname: "Mechanical Keyboard", image: MechanicalKeyboard,  price: 89.99, inStock: "In of Stock" },
    { productname: "Bluetooth Speaker",   image: BluetoothSpeaker,    price: 49.99, inStock: "*Out of Stock*"},
    { productname: "Laptop Stand",        image: LaptopStand,         price: 29.99, inStock: "In of Stock" },
    { productname: "USB-C Hub",           image: USBC_Hub,            price: 19.99, inStock: "In of Stock" },
    { productname: "4K Monitor",          image: Monitor4K,           price: 399.99,inStock: "*Out of Stock*"},
    { productname: "Portable SSD",        image: PortableSSD,         price: 79.99, inStock: "In of Stock" },
    { productname: "Webcam",              image: Webcam,              price: 59.99, inStock: "In of Stock" }
]
    return (
    <div className="container">
      <h1>Product Store</h1>

      <div className="grid">
        {products.map((product) => (
          <ProductCard
            name={product.productname}
            image={product.image}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;


