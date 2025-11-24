import React from "react";  
import '../App.css';
import { Link } from "react-router-dom";

const Navbar = function(){
    return(
        <>
        <nav className="navbar">
            <ul className="navlist">
                <li><Link to="home" className="navtitle">Home</Link></li>
                <li><Link to="/animals" className="navtitle">Animals</Link></li>
                <li><Link to="/cars" className="navtitle">Car</Link></li>
                <li><Link to="/space" className="navtitle">Space</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;