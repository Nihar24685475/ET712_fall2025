import React from "react";  
import '../App.css'
import apple from '../img/apple.png'
import grape from '../img/grape.png'
import oranges from '../img/oranges.png'

const Product =[
    {id:1,name:"Apple",price: 1, was:2.5, image:apple},
    {id:2,name:"grape",price: 1.5, was:2.8, image:grape},
    {id:3,name:"oranges",price: 3, was:5.0, image:oranges}
]

const ProductList = ({addTocart})=>{
    return(
        <>
           <h2 className="producttitle">Products</h2>
           <section className="cardcontainer">
            {
                Product.map(
                    (Products)=>(
                        <div key={Products.id} className="card">
                            <img src={Products.image}/>
                            <p className="productname">
                                {Products.name}
                                <s>{Products.was}/lb</s>
                                <span>${Products.price}</span>/lb
                            </p>
                            <button className="btn_addcard" onClick={()=>addTocart(Products)}>
                                Add to cart
                            </button>
                        </div>
                    )
                )
            }
           </section>
        </>
    )
}
export default ProductList