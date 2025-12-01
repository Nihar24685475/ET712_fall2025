import './App.css';
import React, { use, useState } from 'react';
import Cart from './components/cart';
import ProductList from './components/productlist';

function App() {
  const[cart, setCart] = useState([])
  const addTocart = (product)=>{
    const exist = cart.find((item)=>item.id===product.id)
    if(exist){
      setCart(
        cart.map((item)=>{
          if(item.id === product.id){
            return{...item,qty: item.qty }
          }
          else
            return item
        })
      )
    }
    else {
      setCart([...cart, {...product,qty: 1}])
    }
  }
  const removeFromCart = (id)=>{
  setCart(cart.filter((item)=>item.id !==id))
}
  return (
    <div className='App'>
      <h1 className='apptitle'>Homework 8– React shopping Cart Practice</h1>
      <ProductList  addTocart = {addTocart}/>
      <Cart cart={cart} removeFromCart = {removeFromCart}/>
    </div>
    
    
  );
}

export default App;
