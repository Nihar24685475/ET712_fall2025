import React from "react";
import '../App.css'
import Doritos from '../img/Doritos.png'
import Lays from '../img/lays.png'
import Cheetos from '../img/Cheetos.png'


const Procducts = [
    {id:1,name:"Doritos Nacho Cheese(9.25oz)",price:4,was:5,image:Doritos},
    {id:2,name:"lay's Classic(8oz)",price:4,was:4.5,image:Lays},
    {id:3,name:"Cheetos Crunchy(8.5)",price:4.5,was:5.5,image:Cheetos}
]

const ProcductsList = ({addTocart})=>{
    return(
        <>
        <h2 className="producttitle">Procducts</h2>
        <section className="cardcontainer">
            {
                Procducts.map(
                    (Procduct)=>(
                        <div key={Procduct.id} className="card">
                            <img src={Procduct.image}/>
                            <p className="productname">
                                {Procduct.name}
                                <s>{Procduct.was}</s>
                                <span>${Procduct.price}</span>
                            </p>
                            <button className="btn_addcard" onClick={()=>addTocart(Procduct)}>Add to cart</button>
                        </div>
                    )
                )
            } 
            </section>
        </>
    )
}

export default ProcductsList