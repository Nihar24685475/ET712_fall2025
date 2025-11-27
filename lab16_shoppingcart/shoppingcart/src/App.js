import './App.css';
import React,{use, useState} from 'react';
import ProductList from './components/productlist';
import Cart from './components/cart';
function App() {
  const [cart, setCart] = useState([])

  // find if the pordect already exists in the cart
  const addTocart =(product)=>{
    const exist = cart.find((item)=>item.id===product.id)
    {/** if procduct exists, exist ==tru , icrease the quantity */}
    if(exist){
        setCart(
          cart.map((item)=> {
            if(item.id === product.id){
              return{...item, qty: item.qty + 1 }
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
    
  

// remove item
const removeFromCart = (id)=>{
  setCart(cart.filter((item)=>item.id !==id))
}
  return (
    <div className='App'>
      <h1 className='apptitle'>welcome to Nihar Patel supermarket</h1>

      <ProductList  addTocart = {addTocart}/>
      <Cart cart={cart} removeFromCart = {removeFromCart}/>
    </div>
  );
}

export default App;
