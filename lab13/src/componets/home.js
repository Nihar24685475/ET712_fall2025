import React from "react";
import '../App.css';
import Aboutimg from '../img/about.jpg';
import contacting from '../img/contect.jpg';
import { Link } from "react-router-dom";


const Home = function(){
    return(
        <>
        <header>
            <h1 className="Headertitle">welcome to react routing </h1>
        </header>
        <main className="maincontainer">
            
            <div className="cardimg">
                <Link to="/about">
                <img src={Aboutimg}/>
                </Link></div>
            <div className="cardimg">
                <Link to="/contect">
                <img src={contacting}/>
                </Link>
                </div>
        </main>
        
        </>
    )
}

export default Home;