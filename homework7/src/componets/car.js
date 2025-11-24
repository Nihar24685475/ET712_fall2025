import React from "react";
import '../App.css';
import Cars from '../IMG/cars.jpg';

const Car = function(){
    return(
        <>
        <header>
            <h1 className="Headertitle">Car Page</h1>
            <img src={Cars} className="img"/>
            <h3 className="paragraph">
                Cars have evolved tremendously over the last century, transforming from simple mechanical machines into highly advanced, computer-powered vehicles. Modern cars come equipped with intelligent safety systems, electric motors, and impressive performance features that push engineering to new limits. Whether designed for speed, efficiency, or luxury, cars continue to shape how people travel and experience the world.
            </h3>
        </header>
        
        </>
    )
}

export default Car;