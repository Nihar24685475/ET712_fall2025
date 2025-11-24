import React from "react";
import '../App.css';
import img from '../IMG/Space.jpg'


const Space = function(){
    return(
        <>
        <header>
            <h1 className="Headertitle">Space Page</h1>
            <img src={img} className="img"/>
            <h3 className="paragraph"> Space is a vast and mysterious frontier that stretches far beyond what we can see, filled with stars, planets, galaxies, and cosmic phenomena. Scientists continue to discover new worlds, black holes, and distant galaxies that challenge our understanding of the universe. Despite all our advancements, space remains largely unexplored, inspiring curiosity and reminding us how small we are in the grand cosmic scale.</h3>
        </header>
        
        </>
    )
}

export default Space;