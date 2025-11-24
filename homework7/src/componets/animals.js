import React from "react";
import '../App.css';
import img from '../IMG/Animals.jpeg';

const Animals = function(){
    return(
        <>
        <header>
            <h1 className="Headertitle">Animals Page</h1>
            <img className="img" src={img} />
            <h3 className="paragraph">Animals are some of the most fascinating creatures on our planet, each adapted perfectly to survive in its environment. From tiny insects with incredible strength to massive whales that communicate across oceans, the animal kingdom is full of surprising abilities. Many animals display intelligence, emotions, and unique behaviors that continue to amaze scientists and remind us how diverse and extraordinary life on Earth truly is.</h3>
        </header>
        
        </>
    )
}

export default Animals;