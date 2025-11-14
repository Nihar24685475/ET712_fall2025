import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

const Novbar = function(){
    return(
        <>
        <nav className="navbar"> 
            <div className="qcclink">
                {/* <Link>QCC</Link> */}
                <a href="https://www.qcc.cuny.edu" target="_blank">Qcc</a>
            </div>
            <div className="btngroup">
                <button> <Link to="/">HOME</Link></button>
                <button> <Link to="/about">ABOUT</Link></button>
                <button> <Link to="/contect">CONTECT US</Link></button>
            </div>
        </nav>
        
        
        </>

    )
    
}

export default Novbar;
