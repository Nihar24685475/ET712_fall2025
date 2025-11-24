import React from "react";
import '../App.css';
import img from '../IMG/home.jpg'

const Home = function () {
    return (
        <>
            <header>
                <h1 className="Headertitle">Home Page</h1>
                <img className="img" src={img}/>
                <p className="homeparagraph">
                    <h2>Choose a page from the menu to learn something new.</h2>
                    Click “Animals” to explore wildlife facts.<br />
                    Click “Cars” to discover interesting facts about powerful machines.<br />
                    Click “Space” to discover amazing cosmic secrets.
                </p>

            </header>

        </>
    )
}

export default Home;